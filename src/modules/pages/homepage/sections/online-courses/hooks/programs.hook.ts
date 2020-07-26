import { gql, useQuery } from '@apollo/client';

const useProgramsData = (category: string) => {
  const GET_CATEGORIES = gql`
    query($category: String!) {
      onlineCourseCollection(where: { category: { name: $category } }) {
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
            url
          }
          sys {
            id
          }
        }
      }
    }
  `;

  const { data, loading } = useQuery(GET_CATEGORIES, {
    variables: { category: category }
  });
  return {
    programsData: data?.onlineCourseCollection?.items,
    programsLoading: loading
  };
};

export { useProgramsData };
