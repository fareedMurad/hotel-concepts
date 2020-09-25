import { string } from 'yup';

/**
 * Props
 */
type DropDownProgramsProps = {
  show: boolean;
  subLinks: {
    name: string;
    subtitle: string;
    sys: {
      id: string;
    };
  }[];
};

export { DropDownProgramsProps };
