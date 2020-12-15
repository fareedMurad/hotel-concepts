import { Pricing } from '@app/models';
/**
 * Props
 */
type CartItemProps = {
  name: string;
  author: string;
  quantity: number;
  pricing: Pricing;
  imageSource: string;
  id: string;
  isPreorder: boolean;
  productType: string;
};

export { CartItemProps };
