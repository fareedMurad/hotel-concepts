import { gql, useQuery } from '@apollo/client';

const useProductData = productId => {
  const GET_PRODUCT_DATA = gql`
    query($id: String!) {
      product(id: $id, locale: "en-US") {
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
        previewPagesCollection {
          items {
            sys {
              id
            }
            url
            contentType
          }
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
