import { string } from 'yup';

/**
 * Props
 */
type DropDownProps = {
  show: boolean;
  subLinks: {
    name: string;
    subtitle: string;
    sys: {
      id: string;
    };
  }[];
};

export { DropDownProps };
