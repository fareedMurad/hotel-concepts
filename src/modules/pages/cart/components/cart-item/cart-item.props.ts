import { Book } from '@account/pages/library/models';
import { Program } from '@account/pages/my-programs/models';

/**
 * Props
 */
type CartItemProps = {
  name: string;
  author: string;
  quantity: number;
  price: string;
  imageSource: string;
  id: string;
  /**
   * Product
   */
  product: Book | Program;
};

export { CartItemProps };
