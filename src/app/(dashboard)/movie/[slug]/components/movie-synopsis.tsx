import { GridCard } from './grid-card';

interface MovieSynopsisProps {
  synopsis: string;
  genres: string[];
}

const MovieSynopsis = ({ synopsis, genres }: MovieSynopsisProps) => {
  return (
    <div className="flex flex-col gap-4 w-full lg:min-w-[400px] lg:max-w-[500px]">
      <GridCard
        title="Sinopse"
        titleClassName="text-base"
        containerClassName="w-full h-[300px] overflow-auto"
        type="text"
        data={synopsis}
      />
      <GridCard
        title="Gêneros"
        titleClassName="text-sm"
        containerClassName="w-full sm:w-fit"
        type="array"
        data={genres}
      />
    </div>
  );
};
export { MovieSynopsis };
