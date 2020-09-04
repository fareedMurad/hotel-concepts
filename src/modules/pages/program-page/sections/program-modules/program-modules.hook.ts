import { gql, useQuery } from '@apollo/client';

const useProgramModulesData = (programId: string, language: string) => {
  const GET_PROGRAM_MODULES_DATA = gql`
    query($id: String!, $locale: String!) {
      onlineCourse(id: $id, locale: $locale) {
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
    variables: { id: programId, locale: language }
  });
  return {
    modulesData: data?.onlineCourse?.modulesCollection,
    modulesLoading: loading
  };
};

export { useProgramModulesData };
