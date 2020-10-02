import { ProductModel } from '@pages/product/models/product.model';

/**
 * Props
 */
type CartItemProps = {
  item: {
    name: string;
    author: string;
    amount: number | string;
    price: number;
    preordered: boolean;
    img: string;
    discount?: number;
  };
};

export { CartItemProps };
