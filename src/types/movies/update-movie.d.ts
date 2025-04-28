import { ResponseData } from '../globals';
import { Movie } from './get-movie-info';
import { CreateMovieArgs } from './create-movie';

interface UpdateMovieArgs extends Partial<CreateMovieArgs> {
  id: string;
}

interface UpdateMovieResponse extends ResponseData {
  result: Omit<Movie<'votesAverage' | 'omitedUserVote'>>;
}
export { UpdateMovieResponse, UpdateMovieArgs };
