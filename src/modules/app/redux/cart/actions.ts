import { Book } from '@account/pages/library/models';
import { Program } from '@account/pages/my-programs/models';
import { Product } from '@app/models/fastspring';
import { InvoiceValues } from '@pages/cart/components/modal-invoice-request/models/invoice';
import { ProductModel } from '@pages/product/models/product.model';
import { make } from 'redux-chill';

/**
 * Check cart
 */
const checkCart = make('[cart] check').stage(
  'success',
  (payload: Product[]) => payload
);
/**
 * Add product to cart
 */
const addProductToCart = make('[cart] add product to cart').stage(
  (product: Product) => product
);
/**
 * Handle notifier when cart added
 */
const handleNotifierCart = make('[cart] handle notifier on product added')
  .stage((payload: { product: Book; isVisible: boolean }) => payload)
  .stage('showModal')
  .stage('removingProduct')
  .stage('hideModal')
  .stage('defaultClick');
/**
 * Remove product from cart
 */
const removeProductFromCart = make('[cart] remove product from cart').stage(
  (id: string) => id
);
/**
 * Update product cart
 */
const updateProductCart = make('[cart] update product in cart').stage(
  (payload: Product) => payload
);
/**
 * Update cart state
 */
const updateCartState = make('[cart] update cart state').stage(
  (product: Product[]) => product
);
/**
 * Reset cart state
 */
const resetCartState = make('[cart] reset cart state').stage('success');
/**
 * Get cart products
 */
const getProducts = make('[cart] get products').stage(
  'success',
  (products: (Program | Book)[]) => products
);
/*
 * Send invoice request
 */
const sendInvoiceRequest = make('[cart] send invoice request').stage(
  (payload: InvoiceValues) => payload
);

export {
  getProducts,
  checkCart,
  sendInvoiceRequest,
  addProductToCart,
  removeProductFromCart,
  handleNotifierCart,
  updateProductCart,
  updateCartState,
  resetCartState
};
