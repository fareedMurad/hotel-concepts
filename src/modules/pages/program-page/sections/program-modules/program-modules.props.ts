type ModuleItem = {
  name: string;
  description: string;
  weeks: number;
  hrhWeek: number;
  pdf: string;
}

/**
 * Props
 */
type ProgramModulesProps = {
  modules: ModuleItem[];
};

export { ProgramModulesProps };
