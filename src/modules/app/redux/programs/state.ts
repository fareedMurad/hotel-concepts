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
   * Amount of programs
   */
  public programsTotal: number = 0;
  /*
   * Selected category
   */
  public selectedCategory: ProgramCategoryModel = null;
}

export { ProgramsState };
