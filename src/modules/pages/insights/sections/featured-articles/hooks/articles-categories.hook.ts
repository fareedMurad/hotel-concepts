import { gql, useQuery } from '@apollo/client';

const useArticlesCategoriesData = () => {
  const GET_ARTICLES_CATEGORIES = gql`
    {
      articleCategoriesCollection {
        items {
          linkedFrom {
            entryCollection {
              total
            }
          }
          category
          sys {
            id
          }
        }
      }
    }
  `;

  const { data, loading } = useQuery(GET_ARTICLES_CATEGORIES);

  return {
    categories: data?.articleCategoriesCollection?.items,
    loadingArticlesCategories: loading
  };
};

export { useArticlesCategoriesData };
