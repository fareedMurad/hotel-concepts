import { useQuery } from '@apollo/client';
import { gql } from 'apollo-boost';

/**
 * Download blob as file
 */
const downloadBlob = (blob: Blob, name: string) => {
  const link = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(blob),
    fileName: name,
    download: name
  });
  link.click();
};

/**
 * Get image url
 */
const getAssetUrl = (id: string) => {
  const imageId = id.split('/')[4];
  const getReducedImage = gql`
    query($id: String!) {
      asset(id: $id) {
        url(transform: { format: WEBP })
      }
    }
  `;

  const { data: reducedImage } = useQuery(getReducedImage, {
    variables: { id: imageId }
  });

  const getImage = gql`
    query($id: String!) {
      asset(id: $id) {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(getImage, {
    variables: { id: imageId }
  });

  return {
    reducedUrl: reducedImage?.asset?.url,
    normalUrl: data?.asset?.url
  };
};

/**
 * Query image url
 */
const queryImageUrl = (id: string) => {
  const imageId = id.split('/')[4];

  const getReducedImage = gql`
    query($id: String!) {
      asset(id: $id) {
        url(transform: { quality: 50 })
      }
    }
  `;

  const { data: reducedImage } = useQuery(getReducedImage, {
    variables: { id: imageId }
  });

  const getWebpImage = gql`
    query($id: String!) {
      asset(id: $id) {
        url(transform: { format: WEBP })
      }
    }
  `;

  const { data, loading, error } = useQuery(getWebpImage, {
    variables: { id: imageId }
  });

  return data?.asset?.url;
};

export { downloadBlob, getAssetUrl, queryImageUrl };
