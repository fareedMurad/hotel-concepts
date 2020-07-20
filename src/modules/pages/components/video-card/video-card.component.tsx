import * as React from 'react';
import { VideoCardProps } from './video-card.props';
import * as styles from './video-card.scss';
import { WatchButton } from '@core/components/watch-button';
import Popup from 'reactjs-popup';
import ReactPlayer from 'react-player';

/**
 * Renders VideoCard
 */
const VideoCard: React.FC<VideoCardProps> = ({ title, preview }) => {
  return (
    <div
      className={styles.videoCard}
      style={{
        backgroundImage: `url(${require(`img/${preview}.png`)})`
      }}
    >
      <div className={styles.controls}>
        <Popup
          contentStyle={{
            border: 'none',
            background: 'transparent',
            width: '100%'
          }}
          trigger={
            <div className={styles.watchButton}>
              <WatchButton
                time='0:42'
                titleText='Wedding Content Marketing Idea '
              />
            </div>
          }
          position='top center'
          modal
          lockScroll
        >
          <ReactPlayer
            url='https://vimeo.com/376809414'
            controls
            style={{ margin: 'auto', maxWidth: '100%' }}
          />
        </Popup>
      </div>
    </div>
  );
};

export { VideoCard };
