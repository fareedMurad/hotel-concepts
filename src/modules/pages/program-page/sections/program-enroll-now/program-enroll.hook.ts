import { gql, useQuery } from '@apollo/client';

const useProgramEnrollData = (programId: string) => {
  /**
   * Query payment proposals
   */
  const GET_PAYMENT_PROPOSALS = gql`
    query($id: String!) {
      onlineCourse(id: $id) {
        enrollNowCollection(locale: "en-US") {
          items {
            name
            description
            price
            features
            isMostPopular
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_PAYMENT_PROPOSALS, {
    variables: { id: programId }
  });
  return {
    programEnrollData: data?.onlineCourse?.enrollNowCollection,
    programEnrollLoading: loading
  };
};

export { useProgramEnrollData };
