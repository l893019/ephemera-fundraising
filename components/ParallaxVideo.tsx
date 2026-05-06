'use client';

import { useEffect, useRef, useState } from 'react';

interface ParallaxVideoProps {
  videoSrc: string;
  fallbackImage?: string;
  className?: string;
}

export default function ParallaxVideo({
  videoSrc,
  fallbackImage,
  className = ''
}: ParallaxVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // No parallax on mobile

    const handleScroll = () => {
      const scrolled = window.scrollY;
      // Parallax rate: 0.5x scroll speed
      setOffset(scrolled * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  if (isMobile && fallbackImage) {
    return (
      <div
        ref={containerRef}
        className={`fixed inset-0 -z-10 ${className}`}
        style={{
          backgroundImage: `url(${fallbackImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 -z-10 overflow-hidden ${className}`}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[120vh] object-cover"
        style={{
          transform: `translateY(-${offset}px)`,
          filter: 'brightness(0.4) blur(1px)',
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        {fallbackImage && (
          <img
            src={fallbackImage}
            alt=""
            className="w-full h-full object-cover"
          />
        )}
      </video>
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-black/40 via-transparent to-warm-black/60" />
    </div>
  );
}
