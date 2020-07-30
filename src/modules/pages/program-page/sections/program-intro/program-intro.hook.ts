import { gql, useQuery } from '@apollo/client';

const useProgramIntroData = (programId: string) => {
  const GET_PROGRAM_DATA = gql`
    query($id: String!) {
      onlineCourse(id: $id, locale: "en-US") {
        name
        description
        videoVimeoUrl
        heroImage {
          url
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
    variables: { id: programId }
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
