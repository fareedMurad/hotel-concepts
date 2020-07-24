import { gql, useQuery } from '@apollo/client';

const useProgramsCatalogueData = (categoryId: string) => {
  const GET_PROGRAMS_BY_CATEGORY = gql`
    query($id: String!) {
      courseCategory(id: $id) {
        name
        description
        subtitle
        filters
        linkedFrom {
          onlineCourseCollection {
            items {
              name
            }
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_PROGRAMS_BY_CATEGORY, {
    variables: { id: categoryId }
  });
  return { courseCategory: data?.courseCategory, loading };
};

export { useProgramsCatalogueData };
