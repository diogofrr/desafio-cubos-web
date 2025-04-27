interface MoviePageProps {
  params: Promise<{ slug: string }>;
}

export default async function MoviePage({ params }: MoviePageProps) {
  const { slug } = await params;
  return <div>My Post: {slug}</div>;
}
