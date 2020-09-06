import { gql, useQuery } from '@apollo/client';

const useProgramsData = (category: string, language: string) => {
  const GET_CATEGORIES = gql`
    query($category: String!, $locale: String!) {
      onlineCourseCollection(
        where: { category: { name: $category } }
        limit: 6
        locale: $locale
      ) {
        total
        items {
          name
          price
          weeks
          sprints
          slug
          description
          category {
            sys {
              id
            }
          }
          courseImage {
            url(transform: { format: JPG_PROGRESSIVE, quality: 75 })
          }
          sys {
            id
          }
        }
      }
    }
  `;

  const { data, loading } = useQuery(GET_CATEGORIES, {
    variables: { category: category, locale: language }
  });
  return {
    programsData: data?.onlineCourseCollection?.items,
    programsLoading: loading
  };
};

export { useProgramsData };
