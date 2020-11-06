import { gql, useQuery } from '@apollo/client';

const useProgramAboutData = (programId, language) => {
  const GET_PROGRAM_ABOUT_DATA = gql`
    query($id: String!, $locale: String!) {
      onlineCourse(id: $id, locale: $locale) {
        about {
          aboutText
          skills
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_PROGRAM_ABOUT_DATA, {
    variables: { id: programId, locale: language }
  });

  return {
    programAboutData: data?.onlineCourse?.about,
    programAboutLoading: loading
  };
};

export { useProgramAboutData };
