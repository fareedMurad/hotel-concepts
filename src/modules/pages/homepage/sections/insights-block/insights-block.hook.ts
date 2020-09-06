import { gql, useQuery } from '@apollo/client';

const useInsightsData = language => {
  const GET_ARTICLES = gql`
    query($locale: String!) {
      articleCollection(locale: $locale) {
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

  const { data, loading: insightsDataLoading, error } = useQuery(GET_ARTICLES, {
    variables: { locale: language }
  });

  return { articles: data?.articleCollection?.items, insightsDataLoading };
};

export { useInsightsData };
