import { gql, useQuery } from '@apollo/client';

const useMostPopularArticles = () => {
  const GET_MOST_POPULAR_ARTICLES = gql`
    {
      articleCollection(
        where: { showOnFirstScreen: true }
        limit: 2
        locale: "en-US"
      ) {
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
    firstScreenArticles: data?.articleCollection?.items,
    firstScreenArticlesLoading: loading
  };
};

export { useMostPopularArticles };
