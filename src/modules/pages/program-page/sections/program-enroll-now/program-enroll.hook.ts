import { gql, useQuery } from '@apollo/client';

const useProgramEnrollData = (programId: string, language: string) => {
  /**
   * Query payment proposals
   */
  const GET_PAYMENT_PROPOSALS = gql`
    query($id: String!, $locale: String!) {
      onlineCourse(id: $id) {
        enrollNowCollection(locale: $locale) {
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
    variables: { id: programId, locale: language }
  });
  return {
    programEnrollData: data?.onlineCourse?.enrollNowCollection,
    programEnrollLoading: loading
  };
};

export { useProgramEnrollData };
