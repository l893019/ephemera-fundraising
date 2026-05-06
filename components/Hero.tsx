'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div
        className={`transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 tracking-tight">
          Ephemera
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-light max-w-3xl mx-auto leading-relaxed">
          A new model of arts patronage for San Francisco
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-40' : 'opacity-0'
        }`}
      >
        <div className="w-[1px] h-16 bg-gold-light mx-auto animate-pulse" />
      </div>
    </section>
  );
}
