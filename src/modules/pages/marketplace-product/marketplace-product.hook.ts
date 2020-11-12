import { fetchMarketplaceProduct } from '@app/redux/marketplace';
import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';

const useMarketplaceProductData = () => {
  const dispatch = useDispatch();
  const {
    auth: { authorized, user },
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
    details,
    forWhom,
    comments,
    languages,
    isPreorder,
    pagesCount,
    inWishlist,
    coverPhotos,
    recommended,
    publishDate,
    listOfSkills,
    productImage,
    previewPages,
    preorderDate,
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
    isPreorder,
    inWishlist,
    publishDate,
    previewPages,
    preorderDate,
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
    details,
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
    isPreorder,
    publishDate,
    preorderDate,
    highlightsText,
    availableFormats,
    previewDescription,
    img: productImage?.file?.url
  };

  useEffect(() => {
    dispatch(fetchMarketplaceProduct(id));
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
    recommendedData,
    subscriptionStatus: user?.subscriptionStatus
  };
};

export { useMarketplaceProductData };
