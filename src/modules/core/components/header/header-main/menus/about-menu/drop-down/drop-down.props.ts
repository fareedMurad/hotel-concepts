/**
 * Props
 */
type DropDownProps = {
  show: boolean;
  links: {
    name: string;
    to: string;
  }[];

  setToggleDropdown: (toggle: boolean) => void;
};

export { DropDownProps };
