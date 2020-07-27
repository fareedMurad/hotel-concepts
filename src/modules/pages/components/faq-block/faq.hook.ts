import { gql, useQuery } from '@apollo/client';

const useFaqData = () => {
  /**
   * faq query
   */
  const GET_FAQ = gql`
    {
      faqCollection {
        items {
          question
          answer
          category
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_FAQ);

  return { faqData: data?.faqCollection?.items, faqDataLoading: loading };
};

export { useFaqData };
