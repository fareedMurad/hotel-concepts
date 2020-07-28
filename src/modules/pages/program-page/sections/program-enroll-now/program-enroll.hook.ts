import { gql, useQuery } from '@apollo/client';

const useProgramEnrollData = (programId: string) => {
  /**
   * Query payment proposals
   */
  const GET_PAYMENT_PROPOSALS = gql`
    query($id: String!) {
      paymentProposalsCollection {
        items {
          name
          description
          price
          features
          isEnrollReady
          isMostPopular
        }
      }
      onlineCourse(id: $id) {
        paymentPriceEnterprise
        paymentPriceFlexibleEducation
        paymentPriceSelfEducation
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_PAYMENT_PROPOSALS, {
    variables: { id: programId }
  });
  return {
    programEnrollData: data,
    programEnrollLoading: loading
  };
};

export { useProgramEnrollData };
