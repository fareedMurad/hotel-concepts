/**
 * Props
 */
type AboutMenuProps = {
  onClick?: () => void;
  className: string;
  setSelectedMenu: (isShow: string) => void;
  selectedMenu: string;
};

export { AboutMenuProps };
