import * as React from 'react';
import { VideoCardProps } from './video-card.props';
import * as styles from './video-card.scss';

/**
 * Renders VideoCard
 */
const VideoCard: React.FC<VideoCardProps> = ({ title, duration, preview }) => {
  return (
    <div
      className={styles.videoCard}
      style={{
        backgroundImage: `url(${require(`img/${preview}.png`)})`
      }}
    >
      <div className={styles.overlay}>
        <video className={styles.video} />
        <div className={styles.controls}>
          <div className={styles.buttonPlay}>
            <div className={styles.buttonPlayIcon} />
          </div>
          <div className={styles.info}>
            <div className={styles.infoTitle}>{title}</div>
            <div className={styles.infoDuration}>{duration}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
