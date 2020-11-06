import { SingleProgramModel } from '@app/models/single-program';
type ModuleItem = {
  name: string;
  description: string;
  pdf: string;
  duration: {
    weeks: string | number;
    houers: string | number;
  };
};

/**
 * Props
 */
type ProgramModulesProps = {
  data: SingleProgramModel;
};

export { ProgramModulesProps };
