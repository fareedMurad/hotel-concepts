import { Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useMarketplaceProductData } from './marketplace-product.hook';
import * as styles from './marketplace-product.scss';
import {
  Authors,
  Banner,
  Brochure,
  Description,
  Explore,
  Feedback,
  ForWhom,
  MaterialsIncluded,
  Preview,
  Recommended,
  Results
} from './sections';

/**
 * Renders MarketplaceProduct
 */
const MarketplaceProduct: React.FC = () => {
  const {
    selectedProduct,
    previewData,
    descriptionData,
    forWhomData,
    materialsData,
    explorePagesData,
    authorsData,
    resultsData,
    feedbackData,
    bannerData
  } = useMarketplaceProductData();
  const dispatch = useDispatch();

  // console.log(selectedProduct);

  return (
    <div className={styles.marketplaceProduct}>
      <Preloader id={Preloaders.marketplaceProduct}>
        <Preview data={previewData} />
        <Description data={descriptionData} />
        <div className={styles.divider} />
        <ForWhom data={forWhomData} />
        <MaterialsIncluded data={materialsData} />
        <Explore data={explorePagesData} />
        <Authors data={authorsData} />
        <Results data={resultsData} />
        <Feedback data={feedbackData} />
        <Banner data={bannerData} />
        <Recommended />
        <Brochure />
      </Preloader>
    </div>
  );
};

export { MarketplaceProduct };
