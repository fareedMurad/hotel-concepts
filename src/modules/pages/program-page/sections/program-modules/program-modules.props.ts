type ModuleItem = {
  name: string;
  description: string;
  pdf: string;
  duration: {
    weeks: string | number;
    houers: string | number;
  }
}

/**
 * Props
 */
type ProgramModulesProps = {
  modules: ModuleItem[];
  amountOfWeeklyModules: number | string
};

export { ProgramModulesProps };
