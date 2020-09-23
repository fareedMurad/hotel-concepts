import { navigate } from '@router/store';
/**
 * Props
 */
type MyProductsProps = {
  title: string;
  products: string;
  navigate: 'library' | 'programs';
};

export { MyProductsProps };
