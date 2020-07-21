import * as React from 'react';
import { OurMaterialsProps } from './our-materials.props';
import * as styles from './our-materials.scss';
import { Caption, VideoCard } from '@pages/components';
import { H1, Spinner } from '@core/components';
import { useVideoLecturesData } from './our-materials.hook';



/**
 * Renders OurMaterials
 */
const OurMaterials: React.FC<OurMaterialsProps> = ({ }) => {
  const { videoLectures, loading } = useVideoLecturesData()

  if (loading) return <Spinner />
  const getVideoId = url => url.split('/').pop()
  return (
    <div className={styles.ourMaterials}>
      <H1 className={styles.title}>Our materials</H1>
      <Caption rate='1.0' title='Video Lectures' />
      <div className={styles.videoCards}>
        {videoLectures.map(video => {
          const { vimeoUrl, previewPicture: { url: pictureUrl }, sys: { id } } = video;
          return (
            <VideoCard
              pictureUrl={pictureUrl}
              videoId={getVideoId(vimeoUrl)}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
};

export { OurMaterials };
