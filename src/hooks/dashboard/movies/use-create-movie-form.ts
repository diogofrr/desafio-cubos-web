'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFetchCreateMovie } from './use-fetch-create-movie';
import { useSelects } from '@/hooks/dashboard/selects/use-selects';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { CreateMovieArgs, MovieStatus } from '@/types/movies/create-movie';
import { convertTimeToMinutes } from '@/utils/format-hours-mask';
import { formatCurrencyMask } from '@/utils/format-currency-mask';
import { formatStringToNumber } from '@/utils/format-string-to-number';
import { useSearchAndFilter } from '../search-and-filter/use-search-and-filter';

const fileSizeLimit = 2 * 1024 * 1024;

export const createMovieSchema = z
  .object({
    title: z.string().nonempty({ message: 'Título é obrigatório' }),
    originalTitle: z
      .string()
      .nonempty({ message: 'Título original é obrigatório' }),
    subtitle: z.string().optional(),
    synopsis: z.string().nonempty({ message: 'Sinopse é obrigatória' }),
    budget: z.coerce.string().optional(),
    revenue: z.coerce.string().optional(),
    releaseDate: z
      .string()
      .nonempty({ message: 'Data de lançamento é obrigatória' }),
    duration: z.coerce.string().nonempty({ message: 'Duração é obrigatória' }),
    popularity: z.coerce.string().optional(),
    trailerUrl: z
      .string()
      .url({ message: 'URL do trailer inválida' })
      .optional()
      .or(z.literal('')),
    status: z.enum(['RELEASED', 'CANCELLED', 'PENDING']),
    language: z.string().nonempty({ message: 'Idioma é obrigatório' }),
    genreIds: z
      .array(z.string())
      .min(1, { message: 'Selecione pelo menos um gênero' })
      .max(5, { message: 'Selecione no máximo 5 gêneros' }),
    image: z
      .instanceof(File, {
        message: 'O arquivo deve ser uma imagem do tipo png, jpeg ou jpg',
      })
      .refine(
        (file) => ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type),
        { message: 'O arquivo deve ser uma imagem do tipo png, jpeg ou jpg' }
      )
      .refine((file) => file.size <= fileSizeLimit, {
        message: 'O arquivo não pode exceder 2MB',
      }),
  })
  .refine(
    (data) => {
      if (data.status === 'RELEASED') {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const releaseDateParts = data.releaseDate.split('-').map(Number);
        const releaseDate = new Date(
          releaseDateParts[0],
          releaseDateParts[1] - 1,
          releaseDateParts[2]
        );

        return releaseDate < today;
      }

      return true;
    },
    {
      message:
        'Para filmes lançados, a data de lançamento deve ser no passado.',
      path: ['releaseDate'],
    }
  )
  .refine(
    (data) => {
      if (data.status === 'PENDING') {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const releaseDateParts = data.releaseDate.split('-').map(Number);
        const releaseDate = new Date(
          releaseDateParts[0],
          releaseDateParts[1] - 1,
          releaseDateParts[2]
        );

        return releaseDate >= today;
      }
      return true;
    },
    {
      message: 'Para filmes pendentes, a data de lançamento deve ser futura',
      path: ['releaseDate'],
    }
  )
  .refine(
    (data) => {
      if (data.trailerUrl && data.trailerUrl.includes('youtube.com')) {
        return data.trailerUrl.includes('embed');
      }
      return true;
    },
    {
      message:
        'Para URLs do YouTube, utilize o link de incorporação (com "embed" na URL)',
      path: ['trailerUrl'],
    }
  );

export type CreateMovieFormData = z.infer<typeof createMovieSchema>;

export const useCreateMovieForm = (onClose: () => void) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const createMovieMutation = useFetchCreateMovie();
  const { handleFetchMovies } = useSearchAndFilter();
  const { genres, languages } = useSelects();

  const form = useForm<CreateMovieFormData>({
    resolver: zodResolver(createMovieSchema),
    defaultValues: {
      title: '',
      originalTitle: '',
      subtitle: '',
      synopsis: '',
      budget: formatCurrencyMask(''),
      revenue: formatCurrencyMask(''),
      releaseDate: '',
      duration: '',
      popularity: formatCurrencyMask(''),
      trailerUrl: '',
      status: 'RELEASED',
      language: '',
      genreIds: [],
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearImage = () => {
    setImagePreview(null);
  };

  const onSubmit = async (data: CreateMovieFormData) => {
    const releaseDate = new Date(`${data.releaseDate}T03:00:00.000Z`);

    const movieData: CreateMovieArgs = {
      title: data.title,
      originalTitle: data.originalTitle,
      subtitle: data.subtitle ?? '',
      synopsis: data.synopsis,
      budget: formatStringToNumber(data.budget),
      revenue: formatStringToNumber(data.revenue),
      releaseDate: releaseDate.toISOString(),
      duration: convertTimeToMinutes(data.duration),
      popularity: formatStringToNumber(data.popularity),
      trailerUrl: data.trailerUrl ?? '',
      status: data.status as unknown as MovieStatus,
      language: data.language,
      genres: data.genreIds ?? [],
      image: data.image,
    };

    createMovieMutation.mutate(movieData, {
      onSuccess: () => {
        form.reset();
        setImagePreview(null);
        onClose();
        handleFetchMovies();
      },
    });
  };

  const resetForm = () => {
    form.reset();
    handleClearImage();
  };

  return {
    form,
    imagePreview,
    handleImageChange,
    handleClearImage,
    onSubmit: form.handleSubmit(onSubmit),
    resetForm,
    isSubmitting: createMovieMutation.isPending,
    genres,
    languages,
  };
};
