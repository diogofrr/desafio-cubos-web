import { ResponseData } from '@/types/globals';

interface Language {
  id: string;
  name: string;
}

interface GetLanguagesResponse extends ResponseData {
  result: Language[];
}
export { Language, GetLanguagesResponse };
