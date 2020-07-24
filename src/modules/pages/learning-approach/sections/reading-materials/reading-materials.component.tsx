import * as React from 'react';
import { ReadingMaterialsProps } from './reading-materials.props';
import * as styles from './reading-materials.scss';
import { Caption, DownloadButton } from '@pages/components';
import { Spinner } from '@core/components';
import { useReadingMaterialsData } from './reading-materials.hook';
import { fileSize } from '@core/shared/formaters';
/**
 * Renders ReadingMaterials
 */
const ReadingMaterials: React.FC<ReadingMaterialsProps> = ({}) => {
  const { readingData, readingDataLoading } = useReadingMaterialsData();

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
              url,
              contentType
            } = el.file;
            if (readingDataLoading) return <Spinner />;
            return (
              <DownloadButton
                key={idx}
                caption={caption}
                description={description}
                filetype={filetype}
                size={fileSize(size)}
                url={url}
                contentType={contentType}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { ReadingMaterials };
