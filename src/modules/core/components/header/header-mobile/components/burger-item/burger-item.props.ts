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
  }[];
  /*
   * Show menu
   */
  showMenu: string;
  /*
   * Set visible menu
   */
  setShowMenu: (menu: string) => void;
};

export { BurgerItemProps };
