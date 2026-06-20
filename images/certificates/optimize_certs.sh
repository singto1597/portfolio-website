#!/usr/bin/env bash

# ============================================================
#  optimize_certs.sh
#  ดึงรูปต้นฉบับจากโฟลเดอร์ org/ มาหมุนให้ตรง, ลดขนาด, แปลงเป็น PNG
# ============================================================

set -euo pipefail

SRC_DIR="org"
DEST_DIR="."

if ! command -v convert >/dev/null 2>&1 && ! command -v magick >/dev/null 2>&1; then
    echo "❌ ไม่พบ ImageMagick"
    exit 1
fi

declare -A MAP=(
  ["posn-camp1-68.png"]="POSN_1.png"
  ["015.jpg"]="Robot_Craft.png"
  ["016.jpg"]="Maejo_Robot.png"
  ["014.jpg"]="STEM_Project.png"
  ["021.jpg"]="TMC_13.png"
  ["013.jpg"]="Science_Piriyalai_69.png"
  ["009.jpg"]="Top_Score_CS.png"
  ["010.jpg"]="Top_Score_CS_2.png"
  ["Screenshot from 2026-03-05 22-43-48.png"]="46ict_Robot.png"
)

echo "🚀 เริ่มจัดทรงและบีบอัดไฟล์..."

for src in "${!MAP[@]}"; do
  dst="${MAP[$src]}"
  src_path="$SRC_DIR/$src"
  dst_path="$DEST_DIR/$dst"

  if [[ ! -f "$src_path" ]]; then
    echo "⚠️  [ข้าม] ไม่พบไฟล์ต้นฉบับ: $src_path"
    continue
  fi

  echo "⚙️  กำลังจัดการ: $src -> $dst"
  
  # เพิ่ม -auto-orient เข้าไปก่อน -resize
  if command -v magick >/dev/null 2>&1; then
      magick "$src_path" -auto-orient -resize '1200>' -strip "$dst_path"
  else
      convert "$src_path" -auto-orient -resize '1200>' -strip "$dst_path"
  fi
done

echo "✅ เรียบร้อย! รูปตั้งตรงพร้อมขึ้นเว็บแล้วครับ"
