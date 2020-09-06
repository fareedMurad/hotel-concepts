import { gql, useQuery } from '@apollo/client';

const useArticlesData = (categoryId, articlesToSkip, language) => {
  if (categoryId != 'All') {
    const GET_FILTERED_ARTICLES = gql`
      query($id: String!, $articlesToSkip: Int, $locale: String!) {
        articleCategories(id: $id, locale: $locale) {
          linkedFrom {
            articleCollection(limit: 9, skip: $articlesToSkip) {
              items {
                title
                date
                slug
                popular
                sys {
                  id
                }
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
        }
      }
    `;
    const { data, loading, error } = useQuery(GET_FILTERED_ARTICLES, {
      variables: {
        id: categoryId,
        articlesToSkip: articlesToSkip,
        locale: language
      }
    });

    return {
      articles: data?.articleCategories?.linkedFrom.articleCollection.items,
      articlesLoading: loading
    };
  } else {
    const GET_ALL_ARTICLES = gql`
      query($articlesToSkip: Int, $locale: String!) {
        articleCollection(
          where: { popular_not: true }
          limit: 7
          skip: $articlesToSkip
          locale: $locale
        ) {
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

    const { data, loading } = useQuery(GET_ALL_ARTICLES, {
      variables: { articlesToSkip: articlesToSkip, locale: language }
    });
    return {
      articles: data?.articleCollection?.items,
      articlesLoading: loading
    };
  }

  const data1 = [
    {
      id: 1,
      description: 'Financical Analysis of Hotel Investments Course.',
      activity: 'Marketing',
      date: 'Jan 11, 2019',
      img: 'article-1'
    },
    {
      id: 2,
      description: 'Financical Analysis of Hotel Investments Course.',
      activity: 'Marketing',
      date: 'Jan 11, 2019',
      img: 'article-7'
    },
    {
      id: 3,
      description: 'Financical Analysis of Hotel Investments Course.',
      activity: 'Marketing',
      date: 'Jan 11, 2019',
      img: 'article-3'
    },
    {
      id: 4,
      description: 'Financical Analysis of Hotel Investments Course.',
      activity: 'Marketing',
      date: 'Jan 11, 2019',
      img: 'article-4'
    },
    {
      id: 5,
      description: 'Financical Analysis of Hotel Investments Course.',
      activity: 'Marketing',
      date: 'Jan 11, 2019',
      img: 'article-5'
    },
    {
      id: 6,
      description: 'Financical Analysis of Hotel Investments Course.',
      activity: 'Marketing',
      date: 'Jan 11, 2019',
      img: 'article-1'
    },
    {
      id: 7,
      description: 'Financical Analysis of Hotel Investments Course.',
      activity: 'Marketing',
      date: 'Jan 11, 2019',
      img: 'article-7'
    }
  ];

  return {
    data: data1
  };
};

export { useArticlesData };
