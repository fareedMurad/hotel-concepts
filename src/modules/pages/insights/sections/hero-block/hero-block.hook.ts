import { gql, useQuery } from '@apollo/client';

const useMostPopularArticles = () => {
  const GET_MOST_POPULAR_ARTICLES = gql`
    {
      articleCollection(where: { popular: true }, limit: 2) {
        items {
          sys {
            id
          }
          title
          categoriesCollection {
            items {
              category
            }
          }
          articleImage {
            url
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_MOST_POPULAR_ARTICLES);

  return {
    popularArticles: data?.articleCollection?.items,
    popularArticlesLoading: loading
  };
};

export { useMostPopularArticles };
