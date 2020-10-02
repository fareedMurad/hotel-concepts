/**
 * Props
 */
type DropDownProps = {
  setToggleDropdown: (isShow: boolean) => void;
  links: {
    name: string;
    to: string;
  }[];
};

export { DropDownProps };
