import { Book } from '@account/pages/library/models';
import { Program } from '@account/pages/my-programs/models';
import { Product } from '@app/models/fastspring';

/**
 * Cart state
 */
class CartState {
  /**
   * Selected products
   */
  // public selectedProducts: string[] = [];
  public selectedProducts: Product[] = [];
  public products: (Program | Book)[] = [];
  public lastProduct: Program | Book = null;
}

export { CartState };
