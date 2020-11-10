/**
 * Props
 */
type BurgerItemProps = {
  /*
   * title
   */
  title: string;
  /*
   * menu links
   */
  menuLinks: {
    link: string;
    to: string;
    highlighted?: boolean;
  }[];
  /*
   * Show menu
   */
  showMenu: string;
  /*
   * Set visible menu
   */
  setShowMenu: (menu: string) => void;
  height: number;
};

export { BurgerItemProps };
