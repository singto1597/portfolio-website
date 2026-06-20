#!/usr/bin/env bash
# ============================================================
#  rename_certificates.sh
#
#  เปลี่ยนชื่อ/คัดลอกไฟล์เกียรติบัตรให้ตรงกับชื่อไฟล์ที่อ้างถึง
#  ใน certificates.js (array "certificates")
#
#  การจับคู่ทำด้วยการเทียบเนื้อหาในรูปกับ title/issuer/date ใน JSON
#  ทีละรูปด้วยตา ไม่ใช่การ OCR อัตโนมัติ — เช็คผลลัพธ์อีกรอบก่อนใช้จริง
#
#  วิธีใช้:
#    ./rename_certificates.sh                # คัดลอก (ปลอดภัย, ค่าเริ่มต้น)
#    ./rename_certificates.sh --move         # ย้าย/เปลี่ยนชื่อจริง ไม่เหลือไฟล์เดิม
#    ./rename_certificates.sh --convert      # แปลง jpg -> png จริง (ต้องมี ImageMagick)
#    ./rename_certificates.sh --dry-run      # โชว์แผนงานเฉยๆ ไม่แตะไฟล์
#
#  รันสคริปต์นี้จากโฟลเดอร์ที่มีไฟล์ 003.jpg, 004.jpg, ... อยู่
# ============================================================

set -euo pipefail

SRC_DIR="."                        # โฟลเดอร์ต้นทาง (ที่ไฟล์ตัวเลขอยู่)
DEST_DIR="./images/certificates"   # โฟลเดอร์ปลายทางตามที่ JSON อ้างถึง
MODE="copy"                        # copy (ปลอดภัย) | move
CONVERT=0
DRY_RUN=0

for arg in "$@"; do
  case "$arg" in
    --move)    MODE="move" ;;
    --convert) CONVERT=1 ;;
    --dry-run) DRY_RUN=1 ;;
    -h|--help)
      grep '^#' "$0" | sed 's/^# \{0,1\}//'
      exit 0
      ;;
    *)
      echo "ไม่รู้จัก option: $arg" >&2
      exit 1
      ;;
  esac
done

mkdir -p "$DEST_DIR"

# ชื่อไฟล์ต้นทาง (relative ต่อ SRC_DIR) -> ชื่อไฟล์ปลายทาง (ตามฟิลด์ "image" ใน JSON)
declare -A MAP=(
  ["posn-camp1-68.png"]="POSN_1.png"
  ["015.jpg"]="Robot_Craft.png"
  ["016.jpg"]="Maejo_Robot.png"
  ["014.jpg"]="STEM_Project.png"
  ["021.jpg"]="TMC_13.png"
  ["013.jpg"]="Science_Piriyalai_69.png"

  # ⚠️ ข้อขัดแย้ง: JSON มี entry "Top_Score_CS.png" แค่อันเดียว
  # แต่จริงๆเป็นใบรางวัลคนละใบ (การโปรแกรม 3 / วิทยาการคำนวณ 2)
  # แยกชื่อไว้ก่อน 2 ไฟล์ -> ไปเพิ่ม entry ที่ 2 ใน certificates.js เอง
  ["009.jpg"]="Top_Score_CS.png"        # การโปรแกรม 3 (94%)
  ["010.jpg"]="Top_Score_CS_2.png"      # วิทยาการคำนวณ 2 (90%)

  # 🟡 ความมั่นใจ "กลาง": สีเหรียญในรูป (เหรียญเงิน) ไม่ตรงกับข้อความ
  # ใน JSON (เหรียญทอง/ระดับประเทศ) ในโฟลเดอร์มี 46ict-67.pdf อยู่ด้วย
  # ลองเปิดเช็คไฟล์นั้นก่อน เผื่อมันคือใบจริงที่ตรงกับช่องนี้มากกว่า
  ["Screenshot from 2026-03-05 22-43-48.png"]="46ict_Robot.png"
)

echo "== แผนเปลี่ยนชื่อไฟล์ =="
for src in "${!MAP[@]}"; do
  dst="${MAP[$src]}"
  src_path="$SRC_DIR/$src"
  dst_path="$DEST_DIR/$dst"

  if [[ ! -f "$src_path" ]]; then
    echo "  [ไม่พบไฟล์] $src_path"
    continue
  fi

  src_ext="${src##*.}"
  dst_ext="${dst##*.}"

  if [[ "$CONVERT" -eq 1 && "${src_ext,,}" != "${dst_ext,,}" ]]; then
    if command -v convert >/dev/null 2>&1; then
      echo "  [convert] $src_path  ->  $dst_path"
      [[ "$DRY_RUN" -eq 0 ]] && convert "$src_path" "$dst_path"
      continue
    elif command -v magick >/dev/null 2>&1; then
      echo "  [magick]  $src_path  ->  $dst_path"
      [[ "$DRY_RUN" -eq 0 ]] && magick "$src_path" "$dst_path"
      continue
    else
      echo "  [เตือน] ไม่พบ ImageMagick (convert/magick) จะแค่เปลี่ยนชื่อ ไม่แปลงไฟล์จริง"
    fi
  fi

  action=$([[ "$MODE" == "move" ]] && echo "mv" || echo "cp")
  echo "  [$action] $src_path  ->  $dst_path"
  [[ "$DRY_RUN" -eq 0 ]] && "$action" -- "$src_path" "$dst_path"
done

echo
echo "== รูปที่ไม่มี entry ตรงกันใน JSON (ไม่แตะต้อง) =="
for f in 003.jpg 004.jpg 005.jpg 007.jpg 008.jpg 011.jpg 012.jpg 017.jpg 018.jpg 019.jpg; do
  [[ -f "$SRC_DIR/$f" ]] && echo "  $f"
done

echo
echo "== Entry ใน JSON ที่ไม่มีรูปในชุดนี้ =="
echo "  POSN_2_CMU.png   (ค่าย 2 สอวน. คอมพิวเตอร์ ม.เชียงใหม่)"
echo "  IoT_Shrimp.png   (โครงงานกุ้งฝอย IoT)"
