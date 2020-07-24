import * as React from 'react';
import { OurMaterialsProps } from './our-materials.props';
import * as styles from './our-materials.scss';
import { Caption, VideoCard } from '@pages/components';
import { Spinner, SectionTitle } from '@core/components';
import { useVideoLecturesData } from './our-materials.hook';

/**
 * Renders OurMaterials
 */
const OurMaterials: React.FC<OurMaterialsProps> = ({}) => {
  const { videoLecturessData, videoLecturesLoading } = useVideoLecturesData();

  if (videoLecturesLoading) return <Spinner />;
  const getVideoId = url => url.split('/').pop();
  return (
    <div className={styles.ourMaterials}>
      <SectionTitle className={styles.title}>Our materials</SectionTitle>
      <Caption rate='1.0' title='Video Lectures' />
      <div className={styles.videoCards}>
        {videoLecturessData.map((video, index) => {
          const {
            vimeoUrl,
            previewPicture: { url: pictureUrl },
            sys: { id }
          } = video;
          return (
            <VideoCard
              pictureUrl={pictureUrl}
              videoId={getVideoId(vimeoUrl)}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export { OurMaterials };
