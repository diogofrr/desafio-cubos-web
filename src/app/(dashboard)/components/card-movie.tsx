'use client';

import { useState } from 'react';
import CircleRating from './circle-rating';
import { Genre } from '@/types/movies/list-movies';
import Image from 'next/image';

interface CardMovieProps {
  title: string;
  posterUrl: string;
  rating: number;
  genres?: Genre[];
}

export default function CardMovie({
  title,
  posterUrl,
  rating,
  genres = [],
}: CardMovieProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative w-[183px] sm:w-[235px] h-[281px] sm:h-[355px] group transition-all duration-300 ease-out hover:cursor-pointer"
      title={title}
    >
      <div className="absolute inset-0 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)] group-hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] transition-shadow duration-300 ease-out"></div>

      <div className="relative w-full h-full overflow-hidden rounded-lg z-10">
        <div className="w-full h-full overflow-hidden">
          <Image
            src={posterUrl}
            alt={title}
            width={183}
            height={281}
            className={`w-full h-full object-cover transition-all duration-300 ease-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } group-hover:scale-105`}
            onLoad={() => setIsLoaded(true)}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-mauve-3 dark:bg-mauve-dark-3 animate-pulse" />
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pt-16 pb-2 transition-all duration-300 ease-out">
          <div className="pointer-events-none flex items-center justify-center">
            <div className="transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-300 ease-out pb-[54px]">
              <CircleRating rating={rating} />
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-special font-semibold text-normal uppercase tracking-normal leading-none text-mauve-dark-12 transform group-hover:-translate-y-1 transition-transform duration-300 ease-out">
              {title}
            </h3>

            <div className="max-h-0 group-hover:max-h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out mt-2">
              <p className="font-special font-normal text-sm tracking-normal leading-tight text-mauve-dark-11 break-words transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                {genres.map((genre) => genre.name).join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
