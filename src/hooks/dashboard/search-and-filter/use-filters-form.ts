'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchAndFilterContext } from '@/hooks/context/use-search-and-filter-context';
import { useSelects } from '@/hooks/dashboard/selects/use-selects';
import { useSearchAndFilter } from './use-search-and-filter';
import {
  convertTimeToMinutes,
  convertMinutesToTimeString,
} from '@/utils/format-hours-mask';
import { useState } from 'react';

export const filtersSchema = z
  .object({
    minDuration: z.string().optional(),
    maxDuration: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    languageId: z.string().optional(),
    genreIds: z.array(z.string()).optional(),
  })
  .refine(
    (data) => {
      if (data.minDuration && data.maxDuration) {
        const minMinutes = convertTimeToMinutes(data.minDuration);
        const maxMinutes = convertTimeToMinutes(data.maxDuration);
        return maxMinutes > minMinutes;
      }
      return true;
    },
    {
      message: 'Duração inválida',
      path: ['maxDuration'],
    }
  )
  .refine(
    (data) => {
      if (data.startDate && data.endDate) {
        const startDate = new Date(data.startDate);
        const endDate = new Date(data.endDate);
        return endDate > startDate;
      }
      return true;
    },
    {
      message: 'Data inválida',
      path: ['endDate'],
    }
  );

export type FiltersFormData = z.infer<typeof filtersSchema>;

export const useFiltersForm = () => {
  const {
    state,
    changeEndDate,
    changeStartDate,
    changeMaxDuration,
    changeMinDuration,
    changeLanguageId,
    changeGenreIds,
    changePage,
  } = useSearchAndFilterContext();
  const [showGenres, setShowGenres] = useState(false);
  const { genres, languages } = useSelects();
  const { handleFetchMovies } = useSearchAndFilter();

  const getInitialValues = () => ({
    minDuration: state.minDuration
      ? convertMinutesToTimeString(state.minDuration)
      : '',
    maxDuration: state.maxDuration
      ? convertMinutesToTimeString(state.maxDuration)
      : '',
    startDate: state.startDate || '',
    endDate: state.endDate || '',
    languageId: state.languageId || '',
    genreIds: state.genreIds || [],
  });

  const form = useForm<FiltersFormData>({
    resolver: zodResolver(filtersSchema),
    defaultValues: getInitialValues(),
  });

  const handleToggleGenres = () => {
    setShowGenres(true);
  };

  const onSubmit = (data: FiltersFormData) => {
    const minDurationMinutes = convertTimeToMinutes(data.minDuration || '');
    const maxDurationMinutes = convertTimeToMinutes(data.maxDuration || '');

    changeMinDuration(minDurationMinutes);
    changeMaxDuration(maxDurationMinutes);
    changeStartDate(data.startDate || '');
    changeEndDate(data.endDate || '');
    changeLanguageId(data.languageId || '');
    changeGenreIds(data.genreIds || []);
    changePage(1);

    const filters = {
      page: 1,
      limit: state.limit,
      minDuration: minDurationMinutes || undefined,
      maxDuration: maxDurationMinutes || undefined,
      startDate: data.startDate || undefined,
      endDate: data.endDate || undefined,
      languageId: data.languageId || undefined,
      genreIds:
        data.genreIds && data.genreIds.length > 0
          ? data.genreIds.join(',')
          : undefined,
    };

    handleFetchMovies(filters);
  };

  const handleResetFilters = () => {
    changeEndDate('');
    changeStartDate('');
    changeMaxDuration(0);
    changeMinDuration(0);
    changeLanguageId('');
    changeGenreIds([]);
    changePage(1);

    form.reset(getInitialValues());
  };

  return {
    form,
    onSubmit,
    genres,
    languages,
    filtersSchema,
    showGenres,
    getInitialValues,
    handleResetFilters,
    handleToggleGenres,
  };
};
