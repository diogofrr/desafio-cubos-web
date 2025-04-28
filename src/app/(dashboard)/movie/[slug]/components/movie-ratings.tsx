import { GridCard } from './grid-card';
import CircleRating from '@/app/(dashboard)/components/circle-rating';

interface MovieRatingsProps {
  totalVotes: number;
  averageScore: number;
  subtitle: string;
}

const MovieRatings = ({
  totalVotes,
  averageScore,
  subtitle,
}: MovieRatingsProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
      <div className="order-2 lg:order-1 px-0 lg:px-4 py-2 text-center lg:text-left">
        <p className="font-montserrat font-normal text-base">{subtitle}</p>
      </div>
      <div className="order-1 lg:order-2 flex flex-row items-center justify-center gap-4 w-full lg:w-auto">
        <GridCard
          title="Popularidade"
          titleClassName="text-xs"
          type="info"
          data={totalVotes}
          containerClassName="h-fit flex-1 md:flex-none md:w-[calc(50%-52px)] lg:w-auto"
        />
        <GridCard
          title="Votos"
          titleClassName="text-xs"
          type="info"
          data={totalVotes}
          containerClassName="h-fit flex-1 md:flex-none md:w-[calc(50%-52px)] lg:w-auto"
        />
        <div className="flex-shrink-0">
          <CircleRating rating={averageScore} size={98} strokeWidth={4} />
        </div>
      </div>
    </div>
  );
};
export { MovieRatings };
