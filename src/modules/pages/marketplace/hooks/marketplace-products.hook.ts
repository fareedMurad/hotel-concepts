import { gql, useQuery } from '@apollo/client';

const useProductsData = category => {
  const GET_PRODUCTS_DATA = gql`
    query($category: String!) {
      productCollection(
        where: { productCategory: { category: $category } }
        locale: "en-US"
      ) {
        items {
          name
          productImagesCollection {
            items {
              url
            }
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
    variables: { category: category }
  });
  return { products: data?.productCollection?.items, productsLoading: loading };
};

export { useProductsData };
