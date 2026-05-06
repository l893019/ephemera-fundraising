# Ephemera Fundraising Page - Setup Guide

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the page.

## Adding Your Media

### Videos

1. Place your video file(s) in `/public/videos/`
2. Name your main ambient video: `ephemera-ambient.mp4`
3. For best web performance:
   - Use MP4 format (H.264 codec)
   - Recommended max size: 20MB
   - Recommended dimensions: 1920x1080 or 1280x720
   - Compress using tools like HandBrake or ffmpeg

**Video Compression Command (using ffmpeg):**
```bash
ffmpeg -i input.mov -vcodec h264 -acodec aac -b:v 2M -vf scale=1920:1080 ephemera-ambient.mp4
```

### Photos

1. Place photos in `/public/images/`
2. Name them: `gallery-1.jpg`, `gallery-2.jpg`, etc.
3. Add a fallback image: `ephemera-fallback.jpg` (used when video doesn't load)
4. Recommended format: JPG or WebP
5. Recommended size: 1200px on longest side

To add more photos, edit `app/page.tsx` and update the `photos` array:

```typescript
const photos = [
  { src: '/images/gallery-1.jpg', alt: 'Description', width: 800, height: 600 },
  { src: '/images/gallery-2.jpg', alt: 'Description', width: 800, height: 600 },
  // Add more photos here
];
```

## Customization

### Update Donation Link

Edit `components/CTA.tsx` and replace the `#donate` href with your actual donation link (Givebutter, Stripe, etc.)

### Color Palette

The candlelit palette is defined in `app/globals.css`:
- `--background`: #0a0604 (warm black)
- `--foreground`: #f4e5d3 (warm white)
- `--gold`: #d4a574 (gold accent)

### Typography

Fonts are configured in `app/layout.tsx`:
- Headings: Fraunces
- Body: Newsreader
- Section markers: IBM Plex Mono

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Environment Variables

If you need to add environment variables (e.g., for donation API keys), create a `.env.local` file:

```
NEXT_PUBLIC_DONATION_URL=your_donation_url
```

Then use it in your code:
```typescript
const donationUrl = process.env.NEXT_PUBLIC_DONATION_URL;
```

## Troubleshooting

### Video Not Playing

1. Make sure the video file is in `/public/videos/ephemera-ambient.mp4`
2. Check browser console for errors
3. Ensure video is properly encoded (H.264/MP4)
4. Add a fallback image: `/public/images/ephemera-fallback.jpg`

### Photos Not Loading

1. Verify photos are in `/public/images/`
2. Check file names match the array in `app/page.tsx`
3. Ensure Next.js server is running

### Performance Issues

1. Compress your video file (keep under 20MB)
2. Optimize images using tools like [TinyPNG](https://tinypng.com)
3. Use WebP format for images when possible

## File Structure

```
ephemera-fundraising/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page content
│   └── globals.css         # Global styles & colors
├── components/
│   ├── ParallaxVideo.tsx   # Video background with parallax
│   ├── Hero.tsx            # Opening section
│   ├── Section.tsx         # Content sections with animations
│   ├── Hairline.tsx        # Divider lines
│   ├── CTA.tsx             # Donation button
│   └── PhotoGallery.tsx    # Photo grid with lightbox
└── public/
    ├── videos/
    │   └── ephemera-ambient.mp4
    └── images/
        ├── ephemera-fallback.jpg
        ├── gallery-1.jpg
        ├── gallery-2.jpg
        └── ...
```

## Support

For Next.js questions: [nextjs.org/docs](https://nextjs.org/docs)
For deployment help: [vercel.com/docs](https://vercel.com/docs)
