/**
 * Props
 */
type ProgramModuleItemProps = {
  index: number;
  name: string;
  description: string;
 duration: {
   houers: string | number
   weeks: string | number
 }
  pdf: string;
};

export { ProgramModuleItemProps };
