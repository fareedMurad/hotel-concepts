import { fetchMarketplaceProduct } from '@app/redux/marketplace';
import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';

const useMarketplaceProductData = () => {
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state: State) => state.marketplace);
  const {
    params: { id }
  } = useRouteMatch<{ id: string }>();
  const {
    name,
    previewDescription,
    authors,
    languages,
    publishDate,
    highlightsText,
    price,
    availableFormats,
    productImage,
    listOfSkills,
    pagesCount,
    forWhom,
    materialsIncluded,
    forWhomListOfPositions,
    previewPages,
    results,
    comments
  } = selectedProduct || {};

  /**
   * Preview section dataF
   */
  const previewData = {
    id,
    name,
    previewDescription,
    authors,
    languages,
    publishDate,
    highlightsText,
    price,
    availableFormats,
    img: productImage?.file?.url
  };

  /**
   * Description section data
   */
  const descriptionData = {
    id,
    publishDate,
    listOfSkills,
    pagesCount
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
    img: productImage?.file?.url,
    name,
    previewDescription,
    authors,
    languages,
    publishDate,
    highlightsText,
    price,
    availableFormats
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
