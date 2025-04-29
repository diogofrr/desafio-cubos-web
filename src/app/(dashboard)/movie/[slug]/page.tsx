import { MovieDetails } from './components/movie-details';

interface MoviePageProps {
  params?: Promise<{ slug: string }>;
  searchParams?: Promise<unknown>;
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { slug } = await params!;

  return (
    <main className="mx-auto w-full max-w-[1366px] h-min">
      <MovieDetails movieId={slug} />
    </main>
  );
}
