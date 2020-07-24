import { useQuery, gql } from '@apollo/client';

const useVideoLecturesData = () => {
  const GET_VIDO_LECTURES = gql`
    {
      videoLecturesCollection {
        items {
          sys {
            id
          }
          vimeoUrl
          ... on VideoLectures {
            previewPicture {
              url
            }
          }
        }
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_VIDO_LECTURES);

  return {
    videoLecturessData: data?.videoLecturesCollection?.items,
    videoLecturesLoading: loading
  };
};

export { useVideoLecturesData };
