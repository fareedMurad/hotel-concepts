import { gql, useQuery } from '@apollo/client';

const useProductsCategoriesData = () => {
  const GET_PRODUCTS_CATEGORIES = gql`
    {
      productsCategoriesCollection {
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

  const { data, loading, error } = useQuery(GET_PRODUCTS_CATEGORIES);

  return {
    productCategories: data?.productsCategoriesCollection?.items,
    productCategoriesLoading: loading
  };
};

export { useProductsCategoriesData };
