import { gql, useQuery } from '@apollo/client';
import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';

const useQuoteData = language => {
  const {
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);
  const oldSafari = browserName === 'Safari' && browserVersion <= '14';

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
        ur
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_QUOTE_TEXT, {
    variables: { locale: language }
  });

  const imageUrl = oldSafari ? data?.asset?.url : `${data?.asset?.url}?fm=webp`;

  return {
    quoteData: data?.quoteTextCollection?.items[0],
    quoteLoading: loading,
    quoteImage: imageUrl
  };
};

export { useQuoteData };
