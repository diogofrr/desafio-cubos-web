import { MovieDetails } from './components/movie-details';

interface MoviePageProps {
  params: Promise<{ slug: string }> | { slug: string };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const resolvedParams = await (params instanceof Promise
    ? params
    : Promise.resolve(params));
  const { slug } = resolvedParams;

  return (
    <main className="mx-auto w-full max-w-[1366px] h-min">
      <MovieDetails movieId={slug} />
    </main>
  );
}
