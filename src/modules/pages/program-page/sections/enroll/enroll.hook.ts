import { gql, useQuery } from '@apollo/client';

const useEnrollData = (programId: string) => {
  const GET_ENROLL_DATA = gql`
    query($id: String!) {
      onlineCourse(id: $id) {
        whoShouldEnrol {
          description
          positions
        }
      }
    }
  `;
  const { data, loading } = useQuery(GET_ENROLL_DATA, {
    variables: { id: programId }
  });

  return {
    whoShouldEnrollData: data?.onlineCourse?.whoShouldEnrol,
    whoSouldEnrollLoading: loading
  };
};

export { useEnrollData };
