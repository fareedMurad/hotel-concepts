import { gql, useQuery } from '@apollo/client';

const usePopularArticlesData = language => {
  const GET_POPULAR_ARTICLE = gql`
    query($locale: String!) {
      articleCollection(where: { popular: true }, locale: $locale) {
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

  const { data, loading, error } = useQuery(GET_POPULAR_ARTICLE, {
    variables: { locale: language }
  });
  return {
    popularArticle: data?.articleCollection?.items[0],
    popularArticleLoading: loading
  };
};

export { usePopularArticlesData };
