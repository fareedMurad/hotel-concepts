import { gql, useQuery } from '@apollo/client';

const useQuoteData = () => {
  /**
   * get quote test
   */

  const GET_QUOTE_TEXT = gql`
    {
      quoteTextCollection {
        items {
          text
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_QUOTE_TEXT);

  return {
    quoteData: data?.quoteTextCollection?.items[0],
    quoteLoading: loading
  };
};

export { useQuoteData };
