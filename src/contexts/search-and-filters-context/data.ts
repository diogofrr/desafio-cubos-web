import { SearchAndFilterContextInitialState } from '@/types/contexts/search-and-filter-context';

const initialState: SearchAndFilterContextInitialState = {
  search: '',
  page: 1,
  limit: 10,
  minDuration: 0,
  maxDuration: 0,
  startDate: '',
  endDate: '',
  languageId: '',
  genreIds: [],
  movies: null,
  loading: true,
};

export default initialState;
