import { gql, useQuery } from '@apollo/client';

const useEnrollData = (programId: string, language: string) => {
  const GET_ENROLL_DATA = gql`
    query($id: String!, $locale: String!) {
      onlineCourse(id: $id, locale: $locale) {
        whoShouldEnrol {
          description
          positions
        }
      }
    }
  `;
  const { data, loading } = useQuery(GET_ENROLL_DATA, {
    variables: { id: programId, locale: language }
  });

  return {
    whoShouldEnrollData: data?.onlineCourse?.whoShouldEnrol,
    whoSouldEnrollLoading: loading
  };
};

export { useEnrollData };
