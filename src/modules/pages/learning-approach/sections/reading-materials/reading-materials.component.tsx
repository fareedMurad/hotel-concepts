import * as React from 'react';
import { ReadingMaterialsProps } from './reading-materials.props';
import * as styles from './reading-materials.scss';
import { Caption, DownloadButton } from '@pages/components';
import { useReadingMaterialsData } from './reading-materials.hook';
/**
 * Renders ReadingMaterials
 */
const ReadingMaterials: React.FC<ReadingMaterialsProps> = ({}) => {
  const { data } = useReadingMaterialsData();

  return (
    <div className={styles.readingMaterials}>
      <Caption rate='2.0' title='Reading Materials' />
      <div className={styles.wrapper}>
        <div className={styles.cardsContainer}>
          {data.map(file => {
            const { id, caption, description, filetype, size } = file;
            return (
              <DownloadButton
                key={id}
                caption={caption}
                description={description}
                filetype={filetype}
                size={size}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { ReadingMaterials };
