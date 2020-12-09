import { gql, useQuery } from '@apollo/client';
/**
 * Kordie difference data
 */

const useKordieDifferenceData = () => {
  const GET_DOCUMENTS = gql`
    {
      marketplacePdfCollection {
        items {
          previewImage {
            title
            url
          }
          document {
            title
            url
          }
        }
      }
    }
  `;

  const { data, loading } = useQuery(GET_DOCUMENTS);

  const books = data?.marketplacePdfCollection?.items;

  return { books };
};

export { useKordieDifferenceData };
