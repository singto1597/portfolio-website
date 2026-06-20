#!/usr/bin/env bash

# ============================================================
#  optimize_certs.sh
#  ดึงรูปต้นฉบับจากโฟลเดอร์ org/ มาลดขนาด แปลงเป็น PNG และเปลี่ยนชื่อ
# ============================================================

set -euo pipefail

SRC_DIR="org"
DEST_DIR="."

# เช็คว่ามี ImageMagick ให้ใช้งานมั้ย
if ! command -v convert >/dev/null 2>&1 && ! command -v magick >/dev/null 2>&1; then
    echo "❌ ไม่พบ ImageMagick กรุณาติดตั้งก่อน: sudo apt install imagemagick"
    exit 1
fi

# Map ชื่อไฟล์จากต้นฉบับ -> ชื่อใหม่ (บังคับให้เป็น .png)
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

echo "🚀 เริ่มบีบอัดและแปลงไฟล์..."

for src in "${!MAP[@]}"; do
  dst="${MAP[$src]}"
  src_path="$SRC_DIR/$src"
  dst_path="$DEST_DIR/$dst"

  if [[ ! -f "$src_path" ]]; then
    echo "⚠️  [ข้าม] ไม่พบไฟล์ต้นฉบับ: $src_path"
    continue
  fi

  echo "⚙️  กำลังแปลง: $src -> $dst"
  
  # ตั้งค่าคำสั่ง:
  # -resize '1200>' : ย่อรูปให้ด้านที่ยาวที่สุดไม่เกิน 1200px (ถ้ารูปเล็กกว่า 1200px อยู่แล้วจะไม่ขยาย)
  # -strip          : ลบข้อมูล EXIF/Metadata ทิ้งเพื่อรีดขนาดไฟล์
  if command -v magick >/dev/null 2>&1; then
      magick "$src_path" -resize '1200>' -strip "$dst_path"
  else
      convert "$src_path" -resize '1200>' -strip "$dst_path"
  fi
done

echo "✅ เรียบร้อย! ไฟล์พร้อมเอาขึ้นเว็บแล้วครับ"
