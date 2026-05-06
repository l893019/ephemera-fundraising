'use client';

import { useEffect, useRef, useState } from 'react';

interface SectionProps {
  marker?: string;
  question: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  marker,
  question,
  children,
  className = ''
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`max-w-[700px] mx-auto px-6 py-16 md:py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {marker && (
        <div className="section-marker mb-6 opacity-80">
          {marker}
        </div>
      )}

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
        {question}
      </h2>

      <div className="text-lg md:text-xl leading-relaxed space-y-6">
        {children}
      </div>
    </section>
  );
}
