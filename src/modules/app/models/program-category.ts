/**
 * Program category model
 */

type ProgramCategoryModel = {
  category: {
    name: string;
    subtitle: string;
    slug: string;
    description: string;
    isSubfiltersAllowed: boolean;
    id: string;
  };
  total: number;
};

export { ProgramCategoryModel };
