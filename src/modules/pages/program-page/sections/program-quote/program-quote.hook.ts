import { gql, useQuery } from '@apollo/client';

const useProgramQuoteData = (programId: string, language?: string) => {
  const GET_QUOTE_IMAGE = gql`
    query($id: String!, $locale: String!) {
      onlineCourse(id: $id, locale: $locale) {
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
    variables: { id: programId, locale: language }
  });

  return {
    programQuoteData: data?.onlineCourse?.imageQuote,
    programQuoteDataLoading: loading
  };
};

export { useProgramQuoteData };
