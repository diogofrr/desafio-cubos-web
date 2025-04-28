import { GridCard } from './grid-card';
import { formatDate } from '@/utils/format-date';
import { formatDuration } from '@/utils/format-duration';
import { formatSituation } from '@/utils/format-situation';

interface MovieInfoProps {
  releaseDate: string;
  duration: number;
  status: string;
  language: string;
}

const MovieInfo = ({
  releaseDate,
  duration,
  status,
  language,
}: MovieInfoProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row gap-4">
        <GridCard
          title="Lançamento"
          titleClassName="text-xs"
          containerClassName="h-fit flex-1 md:flex-none md:w-[calc(50%-8px)] xl:w-[200px]"
          type="info"
          data={formatDate(releaseDate)}
        />
        <GridCard
          title="Duração"
          titleClassName="text-xs"
          containerClassName="h-fit flex-1 md:flex-none md:w-[calc(50%-8px)] xl:w-[200px]"
          type="info"
          data={formatDuration(duration)}
        />
      </div>
      <div className="flex flex-row gap-4">
        <GridCard
          title="Situação"
          titleClassName="text-xs"
          containerClassName="h-fit flex-1 md:flex-none md:w-[calc(50%-8px)] xl:w-[200px]"
          type="info"
          data={formatSituation(status)}
        />
        <GridCard
          title="Idioma"
          titleClassName="text-xs"
          containerClassName="h-fit flex-1 md:flex-none md:w-[calc(50%-8px)] xl:w-[200px]"
          type="info"
          data={language}
        />
      </div>
    </div>
  );
};
export { MovieInfo };
