import { Checkbox } from '@/components/checkbox';
import { CreateMovieFormData } from '@/hooks/dashboard/movies/use-create-movie-form';
import { Genre } from '@/types/movies/get-genres';
import { useFormContext } from 'react-hook-form';

interface GenreListProps {
  genres: Genre[] | null | undefined;
  disabled?: boolean;
}

const GenresList = ({ genres, disabled = false }: GenreListProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateMovieFormData>();

  if (!genres?.length)
    return <p className="text-sm text-mauve-10">Nenhum gênero disponível</p>;

  return (
    <>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto p-2 border border-mauve-6 dark:border-mauve-dark-6 rounded ${disabled ? 'opacity-70' : ''}`}
      >
        {genres.map((genre) => (
          <div key={genre.id} className="flex items-center">
            <Checkbox
              id={`genre-${genre.id}`}
              value={genre.id}
              disabled={disabled}
              {...register('genreIds')}
            />
            <label
              htmlFor={`genre-${genre.id}`}
              className={`ml-2 text-xs sm:text-sm text-mauve-11 dark:text-mauve-dark-11 truncate ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {genre.name}
            </label>
          </div>
        ))}
      </div>
      {errors?.genreIds && (
        <span className="text-error text-sm">{errors.genreIds.message}</span>
      )}
    </>
  );
};

export { GenresList };
