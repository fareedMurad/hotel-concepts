/**
 * Single program props
 */
type ProgramProps = {
  /**
   * Book type
   */
  type: 'wishlist' | 'purchased';
};

/**
 * Programs Props
 */
type ProgramsProps = {
  /**
   * Books type
   */
  type: 'wishlist' | 'purchased';
  /**
   * Classname
   */
  className?: string;
  /**
   * Data
   */
  data: { items: []; total: number };
};

export { ProgramsProps, ProgramProps };
