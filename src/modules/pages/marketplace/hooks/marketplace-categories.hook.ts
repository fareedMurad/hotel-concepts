import { gql, useQuery } from '@apollo/client';

const useProductsCategoriesData = language => {
  const GET_PRODUCTS_CATEGORIES = gql`
    query($locale: String!) {
      productsCategoriesCollection(locale: $locale) {
        items {
          category
          sys {
            id
          }
          linkedFrom {
            productCollection {
              total
            }
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_PRODUCTS_CATEGORIES, {
    variables: { locale: language }
  });

  return {
    productCategories: data?.productsCategoriesCollection?.items,
    productCategoriesLoading: loading
  };
};

export { useProductsCategoriesData };
