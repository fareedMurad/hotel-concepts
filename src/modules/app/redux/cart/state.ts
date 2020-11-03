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
  public selectedProducts: Product[] = [];
  /**
   * List of products
   */
  public products: (Program | Book)[] = [];
  /**
   * Added product (any should be Program | Book)
   */
  public addedProduct: { product: any; isVisible: boolean } = {
    product: null,
    isVisible: false
  };
  /**
   * is product in cart
   */
  public isProductInCart: boolean = false;
}

export { CartState };
