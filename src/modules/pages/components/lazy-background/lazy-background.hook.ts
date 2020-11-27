import { useQuery } from '@apollo/client';
import { gql } from 'apollo-boost';

const useLazyBackgroundData = (reducedImageId: string, fullImageId: string) => {
  const GET_REDUCED_IMAGE = gql`
    query($id: String!) {
      asset(id: $id) {
        url
      }
    }
  `;

  const GET_FULL_IMAGE = gql`
    query($id: String!) {
      asset(id: $id) {
        url
      }
    }
  `;

  const { data: reducedImage } = useQuery(GET_REDUCED_IMAGE, {
    variables: { id: reducedImageId }
  });
  const { data: fullImage } = useQuery(GET_FULL_IMAGE, {
    variables: { id: fullImageId }
  });

  return {
    reducedImage: reducedImage?.asset?.url,
    fullImage: fullImage?.asset?.url
  };
};

export { useLazyBackgroundData };
