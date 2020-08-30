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
import { useDispatch } from 'react-redux';
import { isBackgroundWhite } from '@core/components/header/store';

/**
 * Renders Product
 */
const Product: React.FC<ProductProps> = ({}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(isBackgroundWhite(true));
    return () => {
      dispatch(isBackgroundWhite(false));
    };
  }, []);
  const { id: productId, categorySlug } = useParams();
  const { product } = useProductData();
  const { pathname } = useLocation();
  const {
    recomendedProducts,
    redomendedProductsLoading
  } = useRecomendedProductsData(categorySlug, productId);

  // if (productLoading) return <Spinner />;
  if (redomendedProductsLoading) return <Spinner />;

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
        <div>Back</div>
      </div>
      <div className={styles.productReview}>
        <div className={styles.slider}>
          <ProductSlider images={product.productImage} />
          <div className={styles.links}>
            <ShareSocial link={''} />
            <div className={styles.linksDownload}>
              {/* {previewPages &&
                previewPages.map(el => ( */}
              <button
                // key={el.sys.id}
                className={styles.downloadBtn}
                // onClick={() => window.open(el.url, '_blank')}
              >
                {/* {convertToFileType(el.contentType)} */}
                PDF
              </button>
              {/* ))} */}
            </div>
          </div>
        </div>
        <ProductCard product={product} />
      </div>
      <ProductDescription product={product} />
      <div className={styles.hr}>
        <Hr />
      </div>

      <Enroll programId={'1fHQgCpPPwnmhdVZFR4WEW'} title={'For whom'} />
      <MaterialsIncluded productMaterials={product.productMaterials} />
      <ExplorePages />
      <Authors authors={product.authors} />
      <ProgramResults programId='3CaXsOXeY9OWY7YxPz4sy0' />
      <Feedback />
      <ProductBanner product={product} />

      <H2 className={styles.recomendedBooks}>Recommended books</H2>

      <ProductsSlider data={recomendedProducts} notOrangeButtons />
      <Brochure />
    </div>
  );
};

export { Product };
