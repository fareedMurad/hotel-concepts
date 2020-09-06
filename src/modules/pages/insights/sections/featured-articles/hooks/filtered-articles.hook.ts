import { gql, useQuery } from '@apollo/client';

const useFilteredArticles = (categoryId, language) => {
  if (!categoryId) return null;
  const GET_FILTERED_ARTICLES = gql`
    query($id: String!, $locale: String!) {
      articleCategories(id: $id, locale: $locale) {
        linkedFrom {
          articleCollection {
            items {
              title
              preText
              date
              slug
              showOnFirstScreen
              popular
            }
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_FILTERED_ARTICLES, {
    variables: { id: categoryId, locale: language }
  });

  return {
    filteredArticles:
      data?.articleCategories?.linkedFrom.articleCollection.items,
    filteredArticlesLoading: loading
  };
};

export { useFilteredArticles };
