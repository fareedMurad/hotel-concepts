import { gql, useQuery } from '@apollo/client';

const useProgramMaterialsData = (programId: string) => {
  const GET_MENTORS = gql`
    query($id: String!) {
      onlineCourse(id: $id) {
        additionalMaterials
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_MENTORS, {
    variables: { id: programId }
  });

  return {
    additionalMaterialsData: data?.onlineCourse?.additionalMaterials,
    additionalMaterialsLoading: loading
  };
};

export { useProgramMaterialsData };
