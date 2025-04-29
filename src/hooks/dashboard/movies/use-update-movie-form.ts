'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFetchUpdateMovie } from './use-fetch-update-movie';
import { useSelects } from '@/hooks/dashboard/selects/use-selects';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { UpdateMovieArgs } from '@/types/movies/update-movie';
import { Movie } from '@/types/movies/get-movie-info';
import {
  convertMinutesToTime,
  convertTimeToMinutes,
} from '@/utils/format-hours-mask';
import {
  formatCurrencyMask,
  parseCurrencyToNumber,
} from '@/utils/format-currency-mask';
import {
  formatStringToNumber,
  formatNumberToDisplayString,
} from '@/utils/format-string-to-number';
import { useMovieDetails } from '@/hooks/movie/use-movie-details';

const fileSizeLimit = 2 * 1024 * 1024;

export const updateMovieSchema = z
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
      })
      .optional(),
  })
  .refine(
    (data) => {
      if (data.status === 'PENDING') {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const releaseDate = new Date(data.releaseDate);
        return releaseDate >= today;
      }
      return true;
    },
    {
      message:
        'Para filmes pendentes, a data de lançamento não pode ser no passado',
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

export type UpdateMovieFormData = z.infer<typeof updateMovieSchema>;

interface UseUpdateMovieFormProps {
  movie: Movie;
  onClose: () => void;
}

export const useUpdateMovieForm = ({
  movie,
  onClose,
}: UseUpdateMovieFormProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(
    movie.imageUrl
  );
  const updateMovieMutation = useFetchUpdateMovie();
  const { genres, languages } = useSelects();
  const { refetchMovie } = useMovieDetails({
    movieId: movie.id,
    enabled: false,
  });

  const form = useForm<UpdateMovieFormData>({
    resolver: zodResolver(updateMovieSchema),
    defaultValues: {
      title: movie.title,
      originalTitle: movie.originalTitle,
      subtitle: movie.subtitle || '',
      synopsis: movie.synopsis,
      budget: formatCurrencyMask(movie.budget),
      revenue: formatCurrencyMask(movie.revenue),
      releaseDate: new Date(movie.releaseDate).toISOString().split('T')[0],
      duration: convertMinutesToTime(movie.duration),
      popularity: movie.popularity
        ? formatNumberToDisplayString(movie.popularity)
        : '',
      trailerUrl: movie.trailerUrl || '',
      status: movie.status as 'RELEASED' | 'CANCELLED' | 'PENDING',
      language: movie.languageId,
      genreIds: movie.genres.map((genre) => genre.id),
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

  const onSubmit = async (data: UpdateMovieFormData) => {
    const movieData: UpdateMovieArgs = {
      id: movie.id,
      title: data.title,
      originalTitle: data.originalTitle,
      subtitle: data.subtitle ?? '',
      synopsis: data.synopsis,
      budget: parseCurrencyToNumber(data.budget),
      revenue: parseCurrencyToNumber(data.revenue),
      releaseDate: data.releaseDate,
      duration: convertTimeToMinutes(data.duration),
      popularity: formatStringToNumber(data.popularity),
      trailerUrl: data.trailerUrl ?? '',
      status: data.status,
      language: data.language,
      genres: data.genreIds ?? [],
      image: data.image,
    };

    updateMovieMutation.mutate(movieData, {
      onSuccess: () => {
        onClose();
        refetchMovie();
      },
    });
  };

  const resetForm = () => {
    form.reset({
      title: movie.title,
      originalTitle: movie.originalTitle,
      subtitle: movie.subtitle || '',
      synopsis: movie.synopsis,
      budget: formatCurrencyMask(movie.budget),
      revenue: formatCurrencyMask(movie.revenue),
      releaseDate: new Date(movie.releaseDate).toISOString().split('T')[0],
      duration: convertMinutesToTime(movie.duration),
      popularity: movie.popularity
        ? formatNumberToDisplayString(movie.popularity)
        : '',
      trailerUrl: movie.trailerUrl || '',
      status: movie.status as 'RELEASED' | 'CANCELLED' | 'PENDING',
      language: movie.languageId,
      genreIds: movie.genres.map((genre) => genre.id),
    });
    setImagePreview(movie.imageUrl);
  };

  return {
    form,
    imagePreview,
    handleImageChange,
    handleClearImage,
    onSubmit: form.handleSubmit(onSubmit),
    resetForm,
    isSubmitting: updateMovieMutation.isPending,
    genres,
    languages,
  };
};
