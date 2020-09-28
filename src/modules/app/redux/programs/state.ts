import { ProgramCategoryModel } from '@app/models/program-category';
import { SingleProgramModel } from '@app/models/single-program';
/**
 * programs state
 */
class ProgramsState {
  /*
   * Categories
   */
  public categories: ProgramCategoryModel[] = [];
  /*
   * Programs
   */
  public programs: SingleProgramModel[] = [];
  /*
   * Selected category
   */
  public selectedCategory: ProgramCategoryModel = null;
}

export { ProgramsState };
