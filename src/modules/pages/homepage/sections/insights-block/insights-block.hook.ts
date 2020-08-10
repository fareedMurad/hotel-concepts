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
            url(
              transform: { format: JPG_PROGRESSIVE, width: 1800, height: 800 }
            )
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
