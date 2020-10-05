import { fetchMarketplaceProduct } from '@app/redux/marketplace';
import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';

const useMarketplaceProductData = () => {
  const dispatch = useDispatch();
  const {
    auth: { authorized },
    marketplace: { selectedProduct }
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

  /**
   * Preview section data
   */
  const previewData = {
    id,
    name,
    price,
    authors,
    languages,
    authorized,
    inWishlist,
    publishDate,
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
    previewPages
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
   * Banner section data
   */
  const bannerData = {
    id,
    name,
    price,
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
    bannerData
  };
};

export { useMarketplaceProductData };
