import * as React from 'react';
import { ProductProps } from './product.props';
import * as styles from './product.scss';
import { Header } from '@core/components/header';
import { ProductSlider } from '@pages/product/components/product-slider';
import { ProductCard } from './components';

import { useMarketplaceData } from '@pages/marketplace/marketplace.hook';
import { Footer, H2, Icon } from '@core/components';
import { ProductsSlider } from '@pages/components/products-slider';
import { useHistory } from 'react-router';

/**
 * Product-card Data
 */
const productCardData = {
  title: 'Twilight of the Money Goods',
  author: 'by John Rapley',
  category: 'Economics',
  language: 'English',
  publishDate: 'Oct. 2014',
  details: 'Best selling book like Nudge,Predictably Irrational and Thinking',
  price: '$26.99'
};

/**
 * Renders Product
 */
const Product: React.FC<ProductProps> = ({ }) => {
  const { books } = useMarketplaceData();
  const history = useHistory();
  const {
    title,
    author,
    category,
    language,
    publishDate,
    details,
    price
  } = productCardData;

  return (
    <div className={styles.product}>
      <div className={styles.header}>
        <Header whiteBackground />
      </div>
      <div onClick={() => history.goBack()} className={styles.back}>
        <div>&#8592;</div>
        <div>Back</div>
      </div>
      <div className={styles.productReview}>
        <div className={styles.slider}>
          <ProductSlider />
          <div className={styles.links}>
            <div className={styles.linksShare}>
              <a href='#'>Share</a>
              <button className={styles.shareButton}>
                <Icon name='share' />
              </button>
            </div>
            <div className={styles.linksDownload}>
              <button className={styles.downloadBtn}>PDF</button>
              <button className={styles.downloadBtn}>EPUB</button>
              <button className={styles.downloadBtn}>FB2</button>
            </div>
          </div>
        </div>
        <ProductCard
          title={title}
          author={author}
          category={category}
          languege={language}
          publishDate={publishDate}
          details={details}
          price={price}
        />
      </div>

      <H2 className={styles.recomendedBooks}>Recommended books</H2>

      <ProductsSlider data={books} notOrangeButtons />
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export { Product };
