import * as React from 'react';
import { MarketplaceProductsCaruselProps } from './marketplace-products-carusel.props';
import * as styles from './marketplace-products-carusel.scss';
import { PreCaption, H2, Spinner } from '@core/components';
import { ProductsSlider } from '@pages/components/products-slider';
import { useProductsData } from '../hooks/marketplace-products.hook';

/**
 * Renders MarketplaceProductsCarusel
 */
const MarketplaceProductsCarusel: React.FC<MarketplaceProductsCaruselProps> = ({
  category
}) => {
  const { products, productsLoading } = useProductsData(category);
  if (productsLoading) return <Spinner />;

  return (
    <React.Fragment>
      <ProductsSlider data={products} />
    </React.Fragment>
  );
};

export { MarketplaceProductsCarusel };
