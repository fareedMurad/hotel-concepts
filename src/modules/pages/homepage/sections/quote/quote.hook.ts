import { gql, useQuery } from '@apollo/client';

const useQuoteData = language => {
  /**
   * get quote test
   */

  const GET_QUOTE_TEXT = gql`
    query($locale: String!) {
      quoteTextCollection(locale: $locale) {
        items {
          text
        }
      }
      asset(id: "6zdfD0o3y4CMyeGFPO4UsW") {
        url(transform: { format: WEBP })
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_QUOTE_TEXT, {
    variables: { locale: language }
  });

  return {
    quoteData: data?.quoteTextCollection?.items[0],
    quoteLoading: loading,
    quoteImage: data?.asset?.url
  };
};

export { useQuoteData };
