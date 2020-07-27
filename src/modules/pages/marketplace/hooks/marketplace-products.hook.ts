import { gql, useQuery } from '@apollo/client';

const useProductsData = category => {
  const GET_PRODUCTS_DATA = gql`
    query($category: String!) {
      productCollection(where: { productCategory: { category: $category } }) {
        items {
          name
          productImage {
            url
          }
          price
          sys {
            id
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_PRODUCTS_DATA, {
    variables: { category: category }
  });
  return { products: data?.productCollection?.items, productsLoading: loading };
};

export { useProductsData };
