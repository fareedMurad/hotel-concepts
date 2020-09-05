import { gql, useQuery } from '@apollo/client';

const useProgramIntroData = (programId: string, language: string) => {
  const GET_PROGRAM_DATA = gql`
    query($id: String!, $locale: String!) {
      onlineCourse(id: $id, locale: $locale) {
        name
        description
        videoVimeoUrl
        heroImage {
          url(
            transform: {
              format: JPG_PROGRESSIVE
              quality: 70
              width: 1300
              height: 860
            }
          )
        }
        previewVideo {
          video {
            url
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_PROGRAM_DATA, {
    variables: { id: programId, locale: language }
  });
  const navButtons = [
    {
      name: 'About',
      anchor: 'about'
    },
    {
      name: 'Content',
      anchor: 'content'
    },
    {
      name: 'Facility',
      anchor: 'facility'
    },
    {
      name: 'Results',
      anchor: 'results'
    },
    {
      name: 'Feedbacks',
      anchor: 'get-involved'
    }
  ];

  return {
    navButtons,
    programData: data?.onlineCourse,
    programDataLoading: loading
  };
};

export { useProgramIntroData };
