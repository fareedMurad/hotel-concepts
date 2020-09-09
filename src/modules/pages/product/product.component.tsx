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

/**
 * Renders Product
 */
const Product: React.FC<ProductProps> = ({}) => {
  const { t } = useTranslation();
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
  const {
    recomendedProducts,
    redomendedProductsLoading
  } = useRecomendedProductsData(categorySlug, productId, language);

  if (productLoading) return <Spinner />;
  if (redomendedProductsLoading) return <Spinner />;

  console.log(product);

  const convertToFileType = file =>
    file
      .split('/')
      .pop()
      .toUpperCase();

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
        <div className={styles.slider}>
          <ProductSlider
            url={product.productImage.url}
            productPreview={product.previewPagesCollection.items[0]}
          />
          <div className={styles.links}>
            <ShareSocial link={''} />
            <div className={styles.linksDownload}>
              {product.previewPagesCollection.items &&
                product.previewPagesCollection.items.map(el => (
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
      <ProductDescription product={product} />
      <div className={styles.hr}>
        <Hr />
      </div>

      <ForWhom productId={productId} />
      <MaterialsIncluded productMaterials={product.materialsIncluded} />
      <ExplorePages data={product.coverPhotosCollection} />
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
    </div>
  );
};

export { Product };
