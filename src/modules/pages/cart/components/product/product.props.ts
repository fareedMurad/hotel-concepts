import { Book } from '@account/pages/library/models';
import { Program } from '@account/pages/my-programs/models';

/**
 * Props
 */
type ProductProps = {
  /**
   * Classname
   */
  className?: string;
  /**
   * Product
   */
  product: Book | Program;
};

export { ProductProps };
