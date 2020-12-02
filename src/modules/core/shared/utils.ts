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

export { downloadBlob };
