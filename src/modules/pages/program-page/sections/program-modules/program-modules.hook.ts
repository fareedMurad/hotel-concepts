import { gql, useQuery } from '@apollo/client';

const useProgramModulesData = (programId: string) => {
  const GET_PROGRAM_MODULES_DATA = gql`
    query($id: String!) {
      onlineCourse(id: $id) {
        modulesCollection {
          total
          items {
            name
            description
            weeks
            hours
            modulePdf {
              url
            }
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_PROGRAM_MODULES_DATA, {
    variables: { id: programId }
  });

  return {
    modulesData: data?.onlineCourse?.modulesCollection,
    modulesLoading: loading
  };
};

export { useProgramModulesData };
