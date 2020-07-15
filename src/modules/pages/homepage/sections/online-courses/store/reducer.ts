import { OnlineCoursesState } from './state';
import { reducer } from 'redux-chill';
import { getCourses } from './actions';

/**
 * online-courses state
 */
const onlineCourses = reducer(new OnlineCoursesState()).on(
  getCourses.success,
  (state, payload) => (state.courses = payload)
);

export { onlineCourses };
