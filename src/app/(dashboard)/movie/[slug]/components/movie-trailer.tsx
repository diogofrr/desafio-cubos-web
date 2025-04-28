'use client';

import { useState } from 'react';

interface MovieTrailerProps {
  trailer: string;
}

const MovieTrailer = ({ trailer }: MovieTrailerProps) => {
  const [error, setError] = useState(!trailer);

  return (
    <section className="m-4 p-4 md:m-8 md:p-8 flex flex-col gap-4">
      <h2 className="font-montserrat font-bold text-2xl text-mauve-12 dark:text-mauve-dark-12">
        Trailer
      </h2>
      <div className="w-full relative pt-[56.25%]">
        {' '}
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center bg-mauve-3/40 dark:bg-mauve-dark-3/40 rounded-md">
            <p className="font-montserrat text-lg text-mauve-11 dark:text-mauve-dark-11">
              Trailer não disponível
            </p>
          </div>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full rounded-md"
            src={trailer}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            onError={() => setError(true)}
          ></iframe>
        )}
      </div>
    </section>
  );
};
export { MovieTrailer };
