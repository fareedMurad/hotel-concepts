import { gql, useQuery } from '@apollo/client';

const usePopularArticlesData = () => {
  const GET_POPULAR_ARTICLE = gql`
    {
      articleCollection(where: { popular: true }) {
        total
        items {
          sys {
            id
          }
          title
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

  const { data, loading, error } = useQuery(GET_POPULAR_ARTICLE);
  return {
    popularArticle: data?.articleCollection?.items[0],
    popularArticleLoading: loading
  };
};

export { usePopularArticlesData };
