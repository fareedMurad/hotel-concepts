import { gql, useQuery } from '@apollo/client';

const useProgramMaterialsData = (programId: string, language: string) => {
  const GET_MENTORS = gql`
    query($id: String!, $locale: String!) {
      onlineCourse(id: $id, locale: $locale) {
        additionalMaterials {
          materialsCollection {
            items {
              description
              url
            }
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_MENTORS, {
    variables: { id: programId, locale: language }
  });

  return {
    additionalMaterialsData:
      data?.onlineCourse?.additionalMaterials?.materialsCollection?.items,
    additionalMaterialsLoading: loading
  };
};

export { useProgramMaterialsData };
