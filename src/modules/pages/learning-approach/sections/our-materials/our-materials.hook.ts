import { useQuery, gql } from '@apollo/client';

const useVideoLecturesData = language => {
  const GET_VIDO_LECTURES = gql`
    query($locale: String!) {
      videoLecturesCollection(locale: $locale) {
        items {
          sys {
            id
          }
          vimeoUrl
          customTitle
          ... on VideoLectures {
            previewPicture {
              url
            }
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_VIDO_LECTURES, {
    variables: { locale: language }
  });

  return {
    videoLecturessData: data?.videoLecturesCollection?.items,
    videoLecturesLoading: loading
  };
};

export { useVideoLecturesData };
