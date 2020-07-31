import { gql, useQuery } from '@apollo/client';

const useArticleFirstScreenData = articleId => {
  const GET_ARTICLE_FIRST_SCREEN_DATA = gql`
    query($id: String!) {
      article(id: $id, locale: "en-US") {
        title
        introText
        readingTime
        articleImage {
          url
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
    variables: { id: articleId }
  });

  return { articleData: data, articleLoading: loading };
};

export { useArticleFirstScreenData };
