import { ResponseData } from '../globals';

interface DeleteMovieArgs {
  id: string;
}

interface DeleteMovieResponse extends ResponseData {
  result: null;
}

export { DeleteMovieArgs, DeleteMovieResponse };
