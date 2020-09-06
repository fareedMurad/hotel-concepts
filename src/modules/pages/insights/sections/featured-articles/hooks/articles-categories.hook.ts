import { gql, useQuery } from '@apollo/client';

const useArticlesCategoriesData = language => {
  const GET_ARTICLES_CATEGORIES = gql`
    query($locale: String!) {
      articleCategoriesCollection(locale: $locale) {
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

  const { data, loading } = useQuery(GET_ARTICLES_CATEGORIES, {
    variables: { locale: language }
  });

  return {
    categories: data?.articleCategoriesCollection?.items,
    loadingArticlesCategories: loading
  };
};

export { useArticlesCategoriesData };
