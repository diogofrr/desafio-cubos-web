import { GridCard } from './grid-card';
import { formatCurrency } from '@/utils/format-currency';

interface MovieFinancesProps {
  budget: string;
  revenue: string;
  profit: number;
}

const MovieFinances = ({ budget, revenue, profit }: MovieFinancesProps) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 w-full">
      <GridCard
        title="Orçamento"
        titleClassName="text-xs"
        type="info"
        containerClassName="h-fit flex-1 md:flex-none md:w-[calc(33.33%-11px)] xl:w-[128px]"
        data={formatCurrency(budget)}
      />
      <GridCard
        title="Receita"
        titleClassName="text-xs"
        type="info"
        containerClassName="h-fit flex-1 md:flex-none md:w-[calc(33.33%-11px)] xl:w-[128px]"
        data={formatCurrency(revenue)}
      />
      <GridCard
        title="Lucro"
        titleClassName="text-xs"
        type="info"
        containerClassName="h-fit flex-1 md:flex-none md:w-[calc(33.33%-11px)] xl:w-[128px]"
        data={formatCurrency(String(profit))}
      />
    </div>
  );
};
export { MovieFinances };
