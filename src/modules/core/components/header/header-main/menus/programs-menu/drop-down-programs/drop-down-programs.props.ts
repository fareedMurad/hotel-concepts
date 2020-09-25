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
  /*
   * Toggle dropdown
   */
  setToggleDropdown: (toggle: boolean) => void;
};

export { DropDownProgramsProps };
