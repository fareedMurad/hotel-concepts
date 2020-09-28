import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getSingleCategory } from '@app/redux/programs';
import { State } from '@app/redux/state';

const useCatalogueInfoData = (categoryId?: string) => {
  const { language } = useSelector((state: State) => state.localization);
  const { selectedCategory } = useSelector(
    (state: State) => state.programsData
  );

  const dispatch = useDispatch();
  const payload = {
    locale: language,
    id: categoryId
  };
  useEffect(() => {
    dispatch(getSingleCategory(payload));
  }, []);

  console.log(selectedCategory);
  return {
    selectedCategory
  };
};
export { useCatalogueInfoData };
