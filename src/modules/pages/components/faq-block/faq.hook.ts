import { gql, useQuery } from '@apollo/client';

const useFaqData = (language, page) => {
  /**
   * faq query
   */
  const GET_FAQ = gql`
    query($locale: String!, $page: String) {
      faqSectionCollection(locale: $locale, where: { pageName: $page }) {
        items {
          pageName
          faqsCollection {
            items {
              question
              answer
              category
            }
          }
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_FAQ, {
    variables: { locale: language, page }
  });

  return {
    faqData: data?.faqSectionCollection?.items[0].faqsCollection.items,
    faqDataLoading: loading
  };
};

export { useFaqData };
