import { ResponseData } from '../globals';
import { Genre } from './get-genres';

interface MovieStatus {
  RELEASED: 'RELEASED';
  CANCELLED: 'CANCELLED';
  PENDING: 'PENDING';
}

interface CreateMovieArgs {
  title: string;
  originalTitle: string;
  subtitle?: string;
  synopsis: string;
  budget?: number;
  revenue?: number;
  releaseDate: string;
  duration: number;
  popularity?: number;
  trailerUrl?: string;
  status: Status;
  language: string;
  genres: Genre[];
  image: File;
}

interface CreateMovieResponse extends ResponseData {
  result: {
    id: string;
  };
}
export { CreateMovieResponse, CreateMovieArgs, MovieStatus };
