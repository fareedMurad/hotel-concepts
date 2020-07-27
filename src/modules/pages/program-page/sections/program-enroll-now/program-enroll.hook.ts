import { gql, useQuery } from '@apollo/client';

const useProgramEnrollData = (programId: string) => {
  /**
   * Query payment proposals
   */
  const GET_PAYMENT_PROPOSALS = gql`
    query($id: String!) {
      onlineCourse(id: $id) {
        paymentProposalCollection {
          items {
            name
            description
            price
            features
            isEnrollReady
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
    programEnrollData: data?.onlineCourse?.paymentProposalCollection?.items,
    programEnrollLoading: loading
  };
};

export { useProgramEnrollData };
