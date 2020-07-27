import { gql, useQuery } from '@apollo/client';
import { useHistory } from 'react-router';

const useArticleFirstScreenData = articleId => {
  const GET_ARTICLE_FIRST_SCREEN_DATA = gql`
    query($id: String!) {
      article(id: $id) {
        title
        preText
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
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_ARTICLE_FIRST_SCREEN_DATA, {
    variables: { id: articleId }
  });

  return { articleFirstScreen: data, articleFirstScreenLoading: loading };
};

export { useArticleFirstScreenData };
