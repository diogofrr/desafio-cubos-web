'use client';

import { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';

interface BackgroundWithGradientProps {
  imageUrl: string | StaticImageData;
  children: React.ReactNode;
  gradientColors?: {
    from: string;
    via: string;
    to: string;
  };
}

export function BackgroundWithGradient({
  imageUrl,
  children,
}: BackgroundWithGradientProps) {
  const [isLoading, setIsLoading] = useState(true);
  const imgSrc = typeof imageUrl === 'string' ? imageUrl : imageUrl.src;

  useEffect(() => {
    const img = new window.Image();
    img.src = imgSrc;
    img.onload = () => {
      setIsLoading(false);
    };

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [imgSrc]);

  return (
    <div className="relative w-full overflow-auto">
      <div
        className="fixed inset-0 bg-mauve-dark-1 transition-opacity duration-500 ease-in-out"
        style={{ opacity: isLoading ? 1 : 0 }}
      ></div>

      <div
        className="fixed inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity: isLoading ? 0 : 1,
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="fixed inset-0 bg-gradient-to-b from-mauve-1 dark:from-mauve-dark-1 from-5% via-mauve-1/40 dark:via-mauve-dark-1/80 via-30% to-mauve-1 dark:to-mauve-dark-1 to-60% pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between items-center min-h-[768px] h-screen">
        {children}
      </div>
    </div>
  );
}
