import { make } from 'redux-chill';
import { Course } from '../models/course';

const getCourses = make('[courses] get courses').stage(
  'success',
  (payload: Course[]) => payload
);
export { getCourses };
