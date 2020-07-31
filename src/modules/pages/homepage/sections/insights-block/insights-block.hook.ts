import { gql, useQuery } from '@apollo/client';

const useInsightsData = () => {
  const GET_ARTICLES = gql`
    {
      articleCollection(locale: "en-US") {
        items {
          sys {
            id
          }
          title
          introText
          slug
          date
          articleImage {
            url
          }
          categoriesCollection {
            items {
              category
            }
          }
        }
      }
    }
  `;

  const { data, loading: insightsDataLoading, error } = useQuery(GET_ARTICLES);

  return { articles: data?.articleCollection?.items, insightsDataLoading };
};

export { useInsightsData };
