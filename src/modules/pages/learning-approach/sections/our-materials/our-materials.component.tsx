import * as React from 'react';
import { OurMaterialsProps } from './our-materials.props';
import * as styles from './our-materials.scss';
import { Caption, VideoCard } from '@pages/components';
import { useOurMaterialsData } from './our-materials.hook';
import { H1 } from '@core/components';

/**
 * Renders OurMaterials
 */
const OurMaterials: React.FC<OurMaterialsProps> = ({}) => {
  const { data } = useOurMaterialsData();
  return (
    <div className={styles.ourMaterials}>
      <H1 className={styles.title}>Our materials</H1>
      <Caption rate='1.0' title='Video Lectures' />
      <div className={styles.videoCards}>
        {data.map(video => {
          const { title, duration, preview, id } = video;
          return (
            <VideoCard
              title={title}
              duration={duration}
              preview={preview}
              key={id}
            />
          );
        })}
      </div>

     
    </div>
  );
};

export { OurMaterials };
