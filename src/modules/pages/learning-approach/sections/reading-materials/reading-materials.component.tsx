import * as React from 'react';
import { ReadingMaterialsProps } from './reading-materials.props';
import * as styles from './reading-materials.scss';
import { AnimatedCaption, DownloadButton } from '@pages/components';
import { Spinner } from '@core/components';
import { useReadingMaterialsData } from './reading-materials.hook';
import { fileSize } from '@core/shared/formaters';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';
/**
 * Renders ReadingMaterials
 */
const ReadingMaterials: React.FC<ReadingMaterialsProps> = ({}) => {
  const { language } = useSelector((state: State) => state.localization);
  const { readingData, readingDataLoading } = useReadingMaterialsData(language);
  const { t } = useTranslation();

  return (
    <div className={styles.readingMaterials}>
      <AnimatedCaption
        rate='2.0'
        title={t('learning-approach.reading-materials.title')}
      />
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
