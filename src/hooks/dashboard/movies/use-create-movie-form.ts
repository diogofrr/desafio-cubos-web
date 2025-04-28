'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFetchCreateMovie } from './use-fetch-create-movie';
import { useSelects } from '@/hooks/dashboard/selects/use-selects';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { CreateMovieArgs, MovieStatus } from '@/types/movies/create-movie';
import { convertTimeToMinutes } from '@/utils/format-hours-mask';
import { formatCurrencyMask } from '@/utils/format-currency-mask';

const fileSizeLimit = 2 * 1024 * 1024;

export const createMovieSchema = z.object({
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
  popularity: z.coerce.number().optional(),
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
});

export type CreateMovieFormData = z.infer<typeof createMovieSchema>;

export const useCreateMovieForm = (onClose: () => void) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const createMovieMutation = useFetchCreateMovie();
  const { genres, languages } = useSelects();
  const router = useRouter();

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
      popularity: undefined,
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

  // Manipular envio do formulário
  const onSubmit = async (data: CreateMovieFormData) => {
    // Mapear os IDs de gênero para objetos de gênero completos
    const selectedGenres =
      genres?.filter((genre) => data.genreIds.includes(genre.id)) || [];

    const movieData: CreateMovieArgs = {
      title: data.title,
      originalTitle: data.originalTitle,
      subtitle: data.subtitle || undefined,
      synopsis: data.synopsis,
      budget: data.budget ? +data.budget.replace(/\D/, '') : 0,
      revenue: data.revenue ? +data.revenue.replace(/\D/, '') : 0,
      releaseDate: data.releaseDate,
      duration: convertTimeToMinutes(data.duration),
      popularity: data.popularity,
      trailerUrl: data.trailerUrl || undefined,
      status: data.status as unknown as MovieStatus,
      language: data.language,
      genres: selectedGenres,
      image: data.image,
    };

    createMovieMutation.mutate(movieData, {
      onSuccess: () => {
        form.reset();
        setImagePreview(null);
        onClose();
        router.refresh();
      },
    });
  };

  // Limpar formulário
  const resetForm = () => {
    form.reset();
    setImagePreview(null);
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
