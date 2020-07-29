import { gql, useQuery } from '@apollo/client';

const useProgramMaterialsData = (programId: string) => {
  const GET_MENTORS = gql`
    query($id: String!) {
      onlineCourse(id: $id) {
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
    variables: { id: programId }
  });

  return {
    additionalMaterialsData:
      data?.onlineCourse?.additionalMaterials?.materialsCollection?.items,
    additionalMaterialsLoading: loading
  };
};

export { useProgramMaterialsData };
