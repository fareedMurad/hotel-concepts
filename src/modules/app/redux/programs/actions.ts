import { ContentType, Language, OnlineCourseSubfilter } from '@app/models/enum';
import { make } from 'redux-chill';
import { SingleProgramModel } from '@app/models/single-program';
import { ProgramCategoryModel } from '@app/models/program-category';

/*
 * Get categories
 */
const getCategories = make('[programs] get categories')
  .stage((locale: string) => locale)
  .stage('success', (payload: ProgramCategoryModel[]) => payload);

/*
 * Get single category
 */

const getSingleCategory = make('[programs] get single category')
  .stage((payload: { locale: string; id: string }) => payload)
  .stage('success', (payload: ProgramCategoryModel) => payload);

/*
 * Get programs
 */
const getPrograms = make('[programs] get programs')
  .stage(
    (payload: {
      skip: number;
      limit: number;
      category: string;
      locale: string;
      subfilters: string;
    }) => payload
  )
  .stage('success', (payload: SingleProgramModel[]) => payload);

/*
 * Select Category
 */
const selectCategory = make('[programs] select category').stage(
  (payload: ProgramCategoryModel) => payload
);

export { getCategories, getPrograms, selectCategory, getSingleCategory };
