import { gql, useQuery } from '@apollo/client';

const useCatalogueInfoData = (categoryId?: string) => {
  const GET_CATEGORY_INFO = gql`
    query($id: String!) {
      courseCategory(id: $id, locale: "en-US") {
        name
        description
        subtitle
        isSubfiltersAllowed
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_CATEGORY_INFO, {
    variables: { id: categoryId }
  });

  return {
    catalogueInfoData: data?.courseCategory,
    catalogueInfoLoading: loading
  };
};
export { useCatalogueInfoData };
