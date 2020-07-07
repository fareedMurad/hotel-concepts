import { make } from 'redux-chill';
import { Vacancy } from '../models/vacancy';

const getVacancies = make('[jobs] get vacancies').stage(
  'success',
  (payload: Vacancy[]) => payload
);
export { getVacancies };
