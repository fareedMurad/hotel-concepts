import { gql, useQuery } from '@apollo/client';

const useArticleFirstScreenData = (articleId, language) => {
  const GET_ARTICLE_FIRST_SCREEN_DATA = gql`
    query($id: String!, $locale: String!) {
      article(id: $id, locale: $locale) {
        title
        introText
        readingTime
        articleImage {
          url(transform: { format: JPG_PROGRESSIVE, quality: 85 })
        }
        categoriesCollection {
          items {
            category
            sys {
              id
            }
          }
        }
        readNext {
          title
          date
          sys {
            id
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_ARTICLE_FIRST_SCREEN_DATA, {
    variables: { id: articleId, locale: language }
  });

  return { articleData: data, articleLoading: loading };
};

export { useArticleFirstScreenData };
