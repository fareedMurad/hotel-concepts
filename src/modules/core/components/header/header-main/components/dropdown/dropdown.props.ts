/**
 * Props
 */
type DropdownProps = {
  /*
   * Title
   */
  title?: string;
  /*
   * Programs
   */
  programs?: {
    name: string;
    subtitle: string;
    sys: { id: string };
  }[];
  /*
   * Links
   */
  links?: {
    name: string;
    image: string;
    to?: string;
  }[];
  /*
   * Select dropdown
   */
  setSelectedMenu: (menu: string) => void;
  /*
   * Links flex direction
   */
  flexDirection?: any;
};

export { DropdownProps };
