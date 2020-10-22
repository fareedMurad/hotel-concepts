import { fetchMarketplaceProduct } from '@app/redux/marketplace';
import { State } from '@app/redux/state';
import { isBackgroundWhite } from '@core/components/header/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';

const useMarketplaceProductData = () => {
  const dispatch = useDispatch();
  const {
    auth: { authorized },
    marketplace: { selectedProduct },
    cart: { selectedProducts }
  } = useSelector((state: State) => state);
  const {
    params: { id }
  } = useRouteMatch<{ id: string }>();
  const {
    name,
    price,
    results,
    authors,
    forWhom,
    comments,
    languages,
    pagesCount,
    inWishlist,
    coverPhotos,
    recommended,
    publishDate,
    listOfSkills,
    productImage,
    previewPages,
    highlightsText,
    availableFormats,
    materialsIncluded,
    previewDescription,
    forWhomListOfPositions
  } = selectedProduct || {};
  const inCart = selectedProducts?.some(one => one.path == id);

  /**
   * Preview section data
   */
  const previewData = {
    id,
    name,
    price,
    inCart,
    authors,
    languages,
    authorized,
    inWishlist,
    publishDate,
    previewPages,
    highlightsText,
    availableFormats,
    previewDescription,
    img: productImage?.file?.url
  };

  /**
   * Description section data
   */
  const descriptionData = {
    id,
    pagesCount,
    publishDate,
    listOfSkills
  };

  /**
   * For whom section data
   */
  const forWhomData = {
    forWhom,
    forWhomListOfPositions
  };

  /**
   * Materials section data
   */
  const materialsData = {
    materialsIncluded
  };

  /**
   * Explore pages data
   */
  const explorePagesData = {
    coverPhotos
  };

  /**
   * Authors section data
   */
  const authorsData = {
    authors
  };

  /**
   * Results section data
   */
  const resultsData = {
    results
  };

  /**
   * Feedback section data
   */
  const feedbackData = {
    comments
  };

  /**
   * Recommended books data
   */
  const recommendedData = {
    recommended
  };
  /**
   * Banner section data
   */
  const bannerData = {
    id,
    name,
    price,
    inCart,
    authors,
    languages,
    publishDate,
    highlightsText,
    availableFormats,
    previewDescription,
    img: productImage?.file?.url
  };

  useEffect(() => {
    dispatch(fetchMarketplaceProduct(id));
    dispatch(isBackgroundWhite(true));
    return () => {
      dispatch(isBackgroundWhite(false));
    };
  }, [id]);

  return {
    selectedProduct,
    previewData,
    descriptionData,
    forWhomData,
    materialsData,
    explorePagesData,
    authorsData,
    resultsData,
    feedbackData,
    bannerData,
    recommendedData
  };
};

export { useMarketplaceProductData };
