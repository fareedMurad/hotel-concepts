import { useQuery } from '@apollo/client';
import { gql } from 'apollo-boost';
import { resolve } from 'dns';
import { useEffect, useState } from 'react';

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
  const getReducedImage = gql`
    query($id: String!) {
      asset(id: $id) {
        url(transform: { format: WEBP })
      }
    }
  `;

  const { data: reducedImage } = useQuery(getReducedImage, {
    variables: { id: id }
  });

  const getImage = gql`
    query($id: String!) {
      asset(id: $id) {
        url(transform: { format: WEBP })
      }
    }
  `;

  const { data, loading, error } = useQuery(getImage, {
    variables: { id: id }
  });

  return {
    reducedUrl: reducedImage?.asset?.url,
    normalUrl: data?.asset?.url
  };
};

export { downloadBlob, getAssetUrl };
