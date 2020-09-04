import { gql, useQuery } from '@apollo/client';

const useCatalogueInfoData = (categoryId?: string, language?: string) => {
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
    catalogueInfoLoading: loading
  };
};
export { useCatalogueInfoData };
