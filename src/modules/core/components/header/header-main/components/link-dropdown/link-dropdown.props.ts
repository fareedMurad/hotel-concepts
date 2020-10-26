/**
 * Props
 */
type LinkDropdownProps = {
  /**
   * Class name
   */
  className?: string;
  /**
   * Link
   */
  link: string;
  /**
   * Image
   */
  image: string;
  /**
   * Navigate to
   */
  to: string;
  /**
   * on Click
   */
  onClick?: () => void;
};

export { LinkDropdownProps };
