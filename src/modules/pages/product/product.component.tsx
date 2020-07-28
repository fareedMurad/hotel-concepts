import * as React from 'react';
import { ProductProps } from './product.props';
import * as styles from './product.scss';
import { Header } from '@core/components/header';
import { ProductSlider } from '@pages/product/components/product-slider';
import { ProductCard } from './components';

import { useMarketplaceData } from '@pages/marketplace/hooks/marketplace.hook';
import { Footer, H2, Icon, Spinner } from '@core/components';
import { ProductsSlider } from '@pages/components/products-slider';
import { useHistory, useParams } from 'react-router';
import { useProductData } from './hooks/product.hook';
import { useRecomendedProductsData } from './hooks/recomended-products.hook';
import { ScrollToTop } from '@app';
import { useDispatch } from 'react-redux';
import { navigate } from '@router/store';

/**
 * Product-card Data
 */
const productCardData = {
  title: 'Twilight of the Money Goods',
  author: 'by John Rapley',
  category: 'Economics',
  language: 'English',
  publishDate: 'Oct. 2014',
  details:
    'Best selling book like Nudge,Predictably Irrational and ThinkingBest selling book like Nudge,Predictably Irrational and ThinkingBest selling book like Nudge,Predictably Irrational and ThinkingBest selling book like Nudge,Predictably Irrational and ThinkingBest selling book like Nudge,Predictably Irrational and Thinking',
  price: '$26.99'
};

/**
 * Renders Product
 */
const Product: React.FC<ProductProps> = ({}) => {
  const history = useHistory();
  const { id: productId, categorySlug } = useParams();

  const { product, productLoading } = useProductData(productId);

  const {
    recomendedProducts,
    redomendedProductsLoading
  } = useRecomendedProductsData(categorySlug, productId);

  if (productLoading) return <Spinner />;
  if (redomendedProductsLoading) return <Spinner />;

  const {
    productImagesCollection: { items: images },
    previewPagesCollection: { items: previewPages }
  } = product;

  const convertToFileType = file =>
    file
      .split('/')
      .pop()
      .toUpperCase();

  return (
    <div className={styles.product}>
      <ScrollToTop />
      <div className={styles.header}>
        <Header whiteBackground />
      </div>
      <div onClick={() => history.goBack()} className={styles.back}>
        <div>&#8592;</div>
        <div>Back</div>
      </div>
      <div className={styles.productReview}>
        <div className={styles.slider}>
          <ProductSlider images={images} />
          <div className={styles.links}>
            <div className={styles.linksShare}>
              <a href='#'>Share</a>
              <button className={styles.shareButton}>
                <Icon name='share' />
              </button>
            </div>
            <div className={styles.linksDownload}>
              {previewPages &&
                previewPages.map(el => (
                  <button
                    key={el.sys.id}
                    className={styles.downloadBtn}
                    onClick={() => window.open(el.url, '_blank')}
                  >
                    {convertToFileType(el.contentType)}
                  </button>
                ))}
            </div>
          </div>
        </div>
        <ProductCard product={product} />
      </div>

      <H2 className={styles.recomendedBooks}>Recommended books</H2>

      <ProductsSlider data={recomendedProducts} notOrangeButtons />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export { Product };
