'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto px-6 py-16">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden cursor-pointer group"
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-warm-black/95 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <button
            className="absolute top-8 right-8 text-gold-light text-4xl hover:text-gold transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}
