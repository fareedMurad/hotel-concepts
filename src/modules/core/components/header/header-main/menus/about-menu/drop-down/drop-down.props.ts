/**
 * Props
 */
type DropDownProps = {
  setSelectedMenu: (isShow: string) => void;
  links: {
    name: string;
    to: string;
  }[];
};

export { DropDownProps };
