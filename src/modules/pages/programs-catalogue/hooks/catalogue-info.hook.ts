import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  selectCategory,
  getSingleCategory
} from '@app/redux/programs';
import { State } from '@app/redux/state';

const useCatalogueInfoData = (categoryId?: string) => {
  const { language } = useSelector((state: State) => state.localization);
  const { selectedCategory } = useSelector(
    (state: State) => state.programsData
  );
  debugger;
  const dispatch = useDispatch();
  const payload = {
    locale: language,
    id: categoryId
  };
  useEffect(() => {
    dispatch(getSingleCategory(payload));
  }, []);

  //old
  const GET_CATEGORY_INFO = gql`
    query($id: String!, $locale: String!) {
      courseCategory(id: $id, locale: $locale) {
        name
        description
        subtitle
        isSubfiltersAllowed
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_CATEGORY_INFO, {
    variables: { id: categoryId, locale: language }
  });

  return {
    catalogueInfoData: data?.courseCategory,
    catalogueInfoLoading: loading,
    selectedCategory: selectedCategory?.category
  };
};
export { useCatalogueInfoData };
