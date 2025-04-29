'use client';

import { useMovieDetails } from '@/hooks/movie/use-movie-details';
import Image from 'next/image';
import { MovieHeader } from './movie-header';
import { MovieRatings } from './movie-ratings';
import { MovieSynopsis } from './movie-synopsis';
import { MovieInfo } from './movie-info';
import { MovieFinances } from './movie-finances';
import { MovieTrailer } from './movie-trailer';
import { MovieSkeleton } from './movie-skeleton';
import { useRouter } from 'next/navigation';
import { formatReducedNumber } from '@/utils/format-reduced-number';

interface MovieDetailsProps {
  movieId: string;
}

const MovieDetails = ({ movieId }: MovieDetailsProps) => {
  const { movie, isLoading, error } = useMovieDetails({ movieId });
  const { push } = useRouter();

  if (isLoading) {
    return <MovieSkeleton />;
  }

  if (error || !movie) {
    return <>{push('/not-found')}</>;
  }

  return (
    <>
      <section className="relative m-4 p-0 md:m-8 md:p-8 flex flex-col gap-6">
        <div className="hidden lg:block absolute inset-0 bg-purple-alpha-3 dark:bg-purple-dark-alpha-1 -z-10 h-[90%]"></div>

        <div className="lg:hidden flex justify-center">
          {movie.imageUrl !== '' ? (
            <Image
              src={movie.imageUrl}
              alt={movie.title}
              width={300}
              height={450}
              className="flex-shrink-0"
            />
          ) : (
            <div className="w-[300px] h-[450px]	flex-shrink-0 bg-mauve-1 dark:bg-mauve-dark-1"></div>
          )}
        </div>

        <MovieHeader
          id={movie.id}
          title={movie.title}
          originalTitle={movie.originalTitle}
        />

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="hidden lg:block flex-shrink-0 relative z-10">
            <div className="relative">
              {movie.imageUrl !== '' ? (
                <Image
                  src={movie.imageUrl}
                  alt={movie.title}
                  width={365}
                  height={540}
                  className="flex-shrink-0 rounded-sm shadow-lg"
                />
              ) : (
                <div className="w-[300px] h-[450px] rounded-sm	flex-shrink-0 bg-mauve-1 dark:bg-mauve-dark-1"></div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full gap-6">
            <MovieRatings
              totalVotes={movie.votesAverage.totalVotes}
              averageScore={movie.votesAverage.averageScore}
              subtitle={movie.subtitle || ''}
              popularity={formatReducedNumber(
                movie.popularity?.toString() ?? '0'
              )}
            />

            <div className="flex flex-col xl:flex-row gap-6">
              <div className="relative">
                <MovieSynopsis
                  synopsis={movie.synopsis}
                  genres={movie.genres.map((genre) => genre.name)}
                />
              </div>

              <div className="flex flex-col gap-6 w-full xl:max-w-[420px]">
                <MovieInfo
                  releaseDate={movie.releaseDate}
                  duration={movie.duration}
                  status={movie.status}
                  language={movie.language.name}
                />

                <MovieFinances
                  budget={movie.budget}
                  revenue={movie.revenue}
                  profit={movie.profit}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <MovieTrailer trailer={movie.trailerUrl} />
    </>
  );
};
export { MovieDetails };
