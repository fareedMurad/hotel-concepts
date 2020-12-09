import { useQuery } from '@apollo/client';
import { State } from '@app/redux/state';
import { gql } from 'apollo-boost';
import { useSelector } from 'react-redux';

const useLazyBackgroundData = (reducedImageId: string, fullImageId: string) => {
  const { name, version } = useSelector(
    (state: State) => state.general.browserVersion
  );

  const oldSafari = name === 'Safari' && version <= '14';

  const GET_REDUCED_IMAGE = gql`
    query($id: String!) {
      asset(id: $id) {
        url
      }
    }
  `;

  const GET_PNG_IMAGE = gql`
    query($id: String!) {
      asset(id: $id) {
        url(transform: { format: PNG })
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
  const { data: fullImage } = useQuery(
    oldSafari ? GET_PNG_IMAGE : GET_FULL_IMAGE,
    {
      variables: { id: fullImageId }
    }
  );

  return {
    reducedImage: reducedImage?.asset?.url,
    fullImage: fullImage?.asset?.url
  };
};

export { useLazyBackgroundData };
