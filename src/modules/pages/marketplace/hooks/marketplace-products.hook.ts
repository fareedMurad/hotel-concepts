import { gql, useQuery } from '@apollo/client';

const useProductsData = (category, language) => {
  const GET_PRODUCTS_DATA = gql`
    query($category: String!, $locale: String!) {
      productCollection(
        where: { productCategory: { category: $category } }
        locale: $locale
      ) {
        items {
          name
          productImage {
            url
          }
          price
          sys {
            id
          }
          productCategory {
            slug
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_PRODUCTS_DATA, {
    variables: { category: category, locale: language }
  });
  return { products: data?.productCollection?.items, productsLoading: loading };
};

export { useProductsData };
