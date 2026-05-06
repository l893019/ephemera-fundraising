#!/bin/bash

echo "🎭 Ephemera Media Setup"
echo "======================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this from the ephemera-fundraising directory"
    echo "   cd ~/ephemera-fundraising"
    echo "   ./scripts/setup-media.sh"
    exit 1
fi

# Find recently downloaded files
DOWNLOADS_DIR=~/Downloads

echo "Looking for recently downloaded photos and videos..."
echo ""

# Find image files modified in last hour
PHOTOS=$(find "$DOWNLOADS_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -mmin -60 2>/dev/null)
VIDEOS=$(find "$DOWNLOADS_DIR" -type f \( -iname "*.mp4" -o -iname "*.mov" \) -mmin -60 2>/dev/null)

PHOTO_COUNT=$(echo "$PHOTOS" | grep -c .)
VIDEO_COUNT=$(echo "$VIDEOS" | grep -c .)

echo "Found:"
echo "  📷 $PHOTO_COUNT photos"
echo "  🎬 $VIDEO_COUNT videos"
echo ""

if [ $PHOTO_COUNT -eq 0 ] && [ $VIDEO_COUNT -eq 0 ]; then
    echo "❌ No recent photos or videos found in Downloads"
    echo ""
    echo "Please download your media files first:"
    echo "  1. Photos: https://photos.google.com/share/AF1QipNadX1wIhDJ4lKk6ukZXFV8UC13DppsN2dofCET2Y6bO4KQOKUntCGr8k0MU6gZOQ"
    echo "  2. Video: https://drive.google.com/drive/folders/1gIW3_hsgRLDah4e-JTic9dGBZjEqFu6P"
    echo ""
    exit 1
fi

# Copy photos
if [ $PHOTO_COUNT -gt 0 ]; then
    echo "Copying photos to public/images/..."

    counter=1
    while IFS= read -r photo; do
        if [ -n "$photo" ]; then
            extension="${photo##*.}"
            cp "$photo" "public/images/gallery-$counter.$extension"
            echo "  ✓ gallery-$counter.$extension"
            counter=$((counter + 1))
        fi
    done <<< "$PHOTOS"

    # Use first photo as fallback
    if [ ! -f "public/images/ephemera-fallback.jpg" ]; then
        cp "public/images/gallery-1."* "public/images/ephemera-fallback.jpg"
        echo "  ✓ ephemera-fallback.jpg (from gallery-1)"
    fi
fi

# Copy video
if [ $VIDEO_COUNT -gt 0 ]; then
    echo ""
    echo "Copying video to public/videos/..."

    # Get first video
    first_video=$(echo "$VIDEOS" | head -1)
    extension="${first_video##*.}"

    if [ "$extension" = "mov" ]; then
        echo "  Converting MOV to MP4..."
        if command -v ffmpeg &> /dev/null; then
            ffmpeg -i "$first_video" -vcodec h264 -acodec aac -b:v 2M -vf scale=1920:1080 public/videos/ephemera-ambient.mp4 -y 2>/dev/null
            echo "  ✓ ephemera-ambient.mp4 (converted & optimized)"
        else
            cp "$first_video" public/videos/ephemera-ambient.mov
            echo "  ⚠ Copied as .mov (install ffmpeg to convert to mp4)"
            echo "    brew install ffmpeg"
        fi
    else
        cp "$first_video" public/videos/ephemera-ambient.mp4
        echo "  ✓ ephemera-ambient.mp4"
    fi
fi

echo ""
echo "✅ Media setup complete!"
echo ""
echo "Next: Visit http://localhost:3000 to see your site"
