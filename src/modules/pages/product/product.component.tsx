import * as React from 'react';
import { ProductProps } from './product.props';
import * as styles from './product.scss';
import { Header } from '@core/components/header';
import { ProductSlider } from '@pages/product/components/product-slider';
import { ProductCard } from './components';
import { Footer, H2, Icon, Spinner } from '@core/components';
import { ProductsSlider } from '@pages/components/products-slider';
import { useHistory, useParams, useLocation } from 'react-router';
import { useProductData } from './hooks/product.hook';
import { useRecomendedProductsData } from './hooks/recomended-products.hook';
import { ScrollToTop } from '@app';
import { Trail } from 'react-spring/renderprops';
import { useClickOutside } from '@core/shared';
import { SEO } from '@core/components/seo/seo.component';

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
  const [showSocial, setShowSocial] = React.useState(false);
  const { id: productId, categorySlug } = useParams();
  const social = ['facebook-small', 'twitter', 'instagram-small'];
  const socialsRef = React.useRef();
  useClickOutside(socialsRef, () => setShowSocial(false));
  const { product, productLoading } = useProductData(productId);
  const { pathname } = useLocation();

  const {
    recomendedProducts,
    redomendedProductsLoading
  } = useRecomendedProductsData(categorySlug, productId);

  if (productLoading) return <Spinner />;
  if (redomendedProductsLoading) return <Spinner />;

  const {
    productImagesCollection: { items: images },
    previewPagesCollection: { items: previewPages },
    name
  } = product;

  const convertToFileType = file =>
    file
      .split('/')
      .pop()
      .toUpperCase();

  const link =
    'https://www.facebook.com/sharer/sharer.php?app_id=978057235952932&sdk=joey&u=https://chillyfacts.com/create-facebook-share-button-for-website-webpages/&display=popup&ref=plugin&src=share_button';

  return (
    <div className={styles.product}>
      <ScrollToTop />
      <SEO
        title={name}
        thumbnail={images[0].url}
        url={`localhost:8289${pathname}`}
      ></SEO>

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
            <div
              ref={socialsRef}
              className={styles.linksShare}
              onClick={() => {
                setShowSocial(!showSocial);
              }}
            >
              <span>Share</span>
              <a className={styles.shareButton}>
                <Icon name='share' />
              </a>

              <ul className={styles.shareButtonItems}>
                <Trail
                  items={social}
                  keys={item => item}
                  to={{ opacity: showSocial && '1.0' }}
                >
                  {social => props => (
                    <li style={props}>
                      <Icon name={social} />
                    </li>
                  )}
                </Trail>
              </ul>
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
