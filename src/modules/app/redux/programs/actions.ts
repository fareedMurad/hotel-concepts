import { make } from 'redux-chill';

/*
 * Get categories
 */
const getCategories = make('[programs] get categories')
  .stage((locale: string) => locale)
  .stage('success', payload => payload);
/*
 * Get programs
 */
const getPrograms = make('[programs] get programs')
  .stage(payload => payload)
  .stage('success', payload => payload);
export { getCategories, getPrograms };
