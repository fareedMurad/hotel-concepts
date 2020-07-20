import * as React from 'react';
import { ReadingMaterialsProps } from './reading-materials.props';
import * as styles from './reading-materials.scss';
import { Caption, DownloadButton } from '@pages/components';

import { gql, useQuery } from '@apollo/client';

/**
 * query files
 */
const GET_READING_MATERIALS = gql`
  {
    readingMaterialsForLearningAproachCollection {
      items {
        ... on ReadingMaterialsForLearningAproach {
          file {
            fileName
            size
            url
            description
            contentType
          }
        }
      }
    }
  }
`;

/**
 * Renders ReadingMaterials
 */
const ReadingMaterials: React.FC<ReadingMaterialsProps> = ({ }) => {
  const { data: datar, loading, error } = useQuery(GET_READING_MATERIALS);

  const readingData =
    datar?.readingMaterialsForLearningAproachCollection?.items;

  function fileSize(bytes, dp = 1) {
    const thresh = 1000;

    if (Math.abs(bytes) < thresh) {
      return bytes + ' B';
    }

    const units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    let u = -1;
    const r = 10 ** dp;

    do {
      bytes /= thresh;
      ++u;
    } while (
      Math.round(Math.abs(bytes) * r) / r >= thresh &&
      u < units.length - 1
    );

    return bytes.toFixed(dp) + ' ' + units[u];
  }

  return (
    <div className={styles.readingMaterials}>
      <Caption rate='2.0' title='Reading Materials' />
      <div className={styles.wrapper}>
        <div className={styles.cardsContainer}>
          {readingData?.map((el, idx) => {
            const {
              fileName: caption,
              description,
              filetype,
              size,
              url
            } = el.file;
            if (loading) return <div>Loading...</div>;
            return (
              <DownloadButton
                key={idx}
                caption={caption}
                description={description}
                filetype={filetype}
                size={fileSize(size)}
                url={url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { ReadingMaterials };
