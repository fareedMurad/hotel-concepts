import { gql, useQuery } from '@apollo/client';

const useRecomendedProductsData = (slug, productId) => {
  const GET_PRODUCTS_DATA = gql`
    query($slug: String!, $productId: String!) {
      productCollection(
        where: { productCategory: { slug: $slug }, sys: { id_not: $productId } }
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
    variables: { slug: slug, productId: productId }
  });
  return {
    recomendedProducts: data?.productCollection?.items,
    redomendedProductsLoading: loading
  };
};

export { useRecomendedProductsData };
