import * as React from 'react';
import { OurMaterialsProps } from './our-materials.props';
import * as styles from './our-materials.scss';
import { Caption, VideoCard } from '@pages/components';
import { Spinner, SectionTitle } from '@core/components';
import { useVideoLecturesData } from './our-materials.hook';
import { useTranslation } from 'react-i18next';

/**
 * Renders OurMaterials
 */
const OurMaterials: React.FC<OurMaterialsProps> = ({}) => {
  const { videoLecturessData, videoLecturesLoading } = useVideoLecturesData();
  const { t } = useTranslation();

  if (videoLecturesLoading) return <Spinner />;
  const getVideoId = url => url.split('/').pop();

  return (
    <div className={styles.ourMaterials}>
      <SectionTitle className={styles.title}>Our materials</SectionTitle>
      <Caption rate='1.0' title={t('learning-approach.our-materials.title')} />
      <div className={styles.videoCards}>
        {videoLecturessData.map((video, index) => {
          const {
            vimeoUrl,
            customTitle,
            previewPicture: { url: pictureUrl },
            sys: { id }
          } = video;
          return (
            <VideoCard
              pictureUrl={pictureUrl}
              videoId={getVideoId(vimeoUrl)}
              key={index}
              customTitle={customTitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export { OurMaterials };
