import { gql, useQuery } from '@apollo/client';

const useProductData = productId => {
  const GET_PRODUCT_DATA = gql`
    query($id: String!) {
      product(id: $id) {
        name
        details
        bookCategory
        productImagesCollection {
          items {
            url
          }
        }
        languages
        price
        author
        publishDate
        previewPages {
          url
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_PRODUCT_DATA, {
    variables: { id: productId }
  });

  return { product: data?.product, productLoading: loading };
};

export { useProductData };
