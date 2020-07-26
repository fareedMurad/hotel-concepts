import { gql, useQuery } from '@apollo/client';

const useCatalogueInfoData = (categoryId?: string) => {
  const GET_CATEGORY_INFO = gql`
    query($id: String!) {
      courseCategory(id: $id) {
        name
        description
        subtitle
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
