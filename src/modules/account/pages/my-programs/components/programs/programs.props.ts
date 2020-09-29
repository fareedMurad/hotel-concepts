import { Program } from '../../models';

/**
 * Single program props
 */
type ProgramProps = {
  /**
   * Book type
   */
  type: 'wishlist' | 'purchased';
  /**
   * Program
   */
  program: Program;
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
  data: { items: Program[]; total: number };
};

export { ProgramsProps, ProgramProps };
