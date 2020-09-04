import { gql, useQuery } from '@apollo/client';

const useFaqData = language => {
  /**
   * faq query
   */
  const GET_FAQ = gql`
    query($locale: String!) {
      faqCollection(locale: $locale) {
        items {
          question
          answer
          category
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_FAQ, {
    variables: { locale: language }
  });

  return { faqData: data?.faqCollection?.items, faqDataLoading: loading };
};

export { useFaqData };
