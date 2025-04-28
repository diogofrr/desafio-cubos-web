import { ResponseData } from '../globals';

interface Genre {
  id: string;
  name: string;
}

interface GetGenresResponse extends ResponseData {
  result: Genre[];
}

export { Genre, GetGenresResponse };
