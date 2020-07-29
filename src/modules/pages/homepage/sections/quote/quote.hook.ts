import { gql, useQuery } from '@apollo/client';

const useQuoteData = () => {
  /**
   * get quote test
   */

  const GET_QUOTE_TEXT = gql`
    {
      quoteTextCollection(locale: "en-US") {
        items {
          text
        }
      }
      asset(id: "6zdfD0o3y4CMyeGFPO4UsW") {
        url
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_QUOTE_TEXT);

  return {
    quoteData: data?.quoteTextCollection?.items[0],
    quoteLoading: loading,
    quoteImage: data?.asset?.url
  };
};

export { useQuoteData };
