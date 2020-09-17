import * as React from 'react';
import { ProductProps } from './product.props';
import * as styles from './product.scss';
import { ProductSlider } from '@pages/product/components/product-slider';
import { ProductCard } from './components';
import { Footer, H2, Icon, Spinner, Hr } from '@core/components';
import { ProductsSlider } from '@pages/components/products-slider';
import { useHistory, useParams, useLocation } from 'react-router';
import { useProductData } from './hooks/product.hook';
import { useRecomendedProductsData } from './hooks/recomended-products.hook';
import { ScrollToTop } from '@app';
import { Trail } from 'react-spring/renderprops';
import { useClickOutside } from '@core/shared';
import { SEO } from '@core/components/seo/seo.component';
import { ShareSocial } from '@core/components/share';
import { ProductDescription } from './sections/product-description';

import { Enroll, ProgramResults } from '@pages/program-page/sections';
import { Brochure } from '@pages/for-companies/sections';
import { MaterialsIncluded } from './sections/materials-included';
import { ExplorePages } from './sections/explore-pages';
import { Authors } from './sections/authors';
import { Feedback } from './sections/feedback';
import { ProductBanner } from './sections/product-banner';
import { useDispatch, useSelector } from 'react-redux';
import { isBackgroundWhite } from '@core/components/header/store';
import { useTranslation } from 'react-i18next';
import { State } from '@app/redux/state';
import { ProductResult } from './sections/product-result';
import { ForWhom } from './sections/for-whom';
import { BookOverviewModal } from './sections/explore-pages/book-overview-modal';
import { toggleBookOverviewModal, toggleBookPreviewModal } from '@ui/modal';
import { BookPreviewModal } from '@pages/components/book-preview-modal';

/**
 * Renders Product
 */
const Product: React.FC<ProductProps> = ({}) => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = React.useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(isBackgroundWhite(true));
    return () => {
      dispatch(isBackgroundWhite(false));
    };
  }, []);
  const { id: productId, categorySlug } = useParams();
  const { product, productLoading } = useProductData(productId);

  const { pathname } = useLocation();
  const { language } = useSelector((state: State) => state.localization);
  const { bookOverviewModal, bookPreviewModal } = useSelector(
    (state: State) => state.ui.modal
  );
  const {
    recomendedProducts,
    redomendedProductsLoading
  } = useRecomendedProductsData(categorySlug, productId, language);

  if (productLoading) return <Spinner />;
  if (redomendedProductsLoading) return <Spinner />;

  const convertToFileType = file =>
    file
      .split('/')
      .pop()
      .toUpperCase();

  console.log(product);

  // const link =
  //   'https://www.facebook.com/sharer/sharer.php?app_id=978057235952932&sdk=joey&u=https://chillyfacts.com/create-facebook-share-button-for-website-webpages/&display=popup&ref=plugin&src=share_button';

  return (
    <div className={styles.product}>
      <ScrollToTop />
      {/* <SEO
        title={name}
        thumbnail={images[0].url}
        url={`localhost:8289${pathname}`}
      ></SEO> */}

      <div className={styles.header}></div>
      <div onClick={() => history.goBack()} className={styles.back}>
        <div>&#8592;</div>
        <div>{t('product.back')}</div>
      </div>
      <div className={styles.productReview}>
        <div className={styles.slider} style={{ paddingBottom: '80px' }}>
          <ProductSlider
            url={product.productImage.url}
            productPreview={product.previewPages.url}
          />
          <div className={styles.links}>
            <ShareSocial link={''} />
            <div className={styles.linksFormats}>
              {product.availableFormats &&
                product.availableFormats.map(format => (
                  <div key={format + Math.random()} className={styles.format}>
                    <span style={{ textTransform: 'uppercase' }}>
                      {' '}
                      {format}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <ProductCard product={product} />
      </div>
      <ProductDescription product={product} />
      <div className={styles.hr}>
        <Hr />
      </div>

      <ForWhom productId={productId} />
      <MaterialsIncluded productMaterials={product.materialsIncluded} />
      <ExplorePages
        setSelectedImage={setSelectedImage}
        data={product.coverPhotosCollection}
      />
      <Authors authors={product.authorsCollection.items} />
      <ProductResult productId={productId} />
      <Feedback data={product.commentsCollection.items} />
      <ProductBanner product={product} />

      <H2 className={styles.recomendedBooks}>{t('product.recomended')}</H2>

      {recomendedProducts ? (
        <div className={styles.productSliderWrap}>
          <ProductsSlider data={recomendedProducts} notOrangeButtons />
        </div>
      ) : (
        <div style={{ padding: 30 }}>
          Unfortunately, there is no recomended books for you yet
        </div>
      )}

      <Brochure />
      {bookOverviewModal && (
        <BookOverviewModal
          hideComponent={() => dispatch(toggleBookOverviewModal(false))}
          url={selectedImage}
        />
      )}
      {bookPreviewModal && (
        <BookPreviewModal
          bookPreview={product.previewPages.url}
          hideComponent={() => dispatch(toggleBookPreviewModal(false))}
        />
      )}
    </div>
  );
};

export { Product };
