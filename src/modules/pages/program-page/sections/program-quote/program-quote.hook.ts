import { gql, useQuery } from '@apollo/client';

const useProgramQuoteData = (programId: string) => {
  const GET_QUOTE_IMAGE = gql`
    query($id: String!) {
      onlineCourse(id: $id) {
        imageQuote {
          quoteText
          backgroundImg {
            url
          }
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_QUOTE_IMAGE, {
    variables: { id: programId }
  });

  return {
    programQuoteData: data?.onlineCourse?.imageQuote,
    programQuoteDataLoading: loading
  };
};

export { useProgramQuoteData };
