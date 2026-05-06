#!/bin/bash

# Ephemera Media Download & Optimization Script
# This script helps you download and optimize media from Google Drive/Photos

echo "🎭 Ephemera Media Setup"
echo "======================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the ephemera-fundraising directory"
    exit 1
fi

# Create directories
mkdir -p public/videos public/images downloads

echo "📁 Directories created"
echo ""
echo "Next steps:"
echo ""
echo "1. Download your Google Drive videos manually:"
echo "   https://drive.google.com/drive/folders/1gIW3_hsgRLDah4e-JTic9dGBZjEqFu6P"
echo "   → Click 'Download all' and save to downloads/"
echo ""
echo "2. Download your Google Photos manually:"
echo "   https://photos.google.com/share/AF1QipNadX1wIhDJ4lKk6ukZXFV8UC13DppsN2dofCET2Y6bO4KQOKUntCGr8k0MU6gZOQ"
echo "   → Select 6-10 best photos, download to downloads/"
echo ""
echo "3. Run this script again to optimize and move files:"
echo "   ./scripts/download-media.sh optimize"
echo ""
