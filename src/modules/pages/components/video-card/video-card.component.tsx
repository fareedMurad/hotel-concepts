import * as React from 'react';
import { VideoCardProps } from './video-card.props';
import * as styles from './video-card.scss';
import { WatchButton } from '@core/components/watch-button';
import Popup from 'reactjs-popup';
import ReactPlayer from 'react-player';
import Player from '@vimeo/player';

/**
 * Renders VideoCard
 */
const VideoCard: React.FC<VideoCardProps> = ({
  pictureUrl,
  videoId,
  customTitle
}) => {
  const [duration, setDuration] = React.useState(0);
  const [videoTitle, setVideoTitle] = React.useState('');
  const videoPlayer = React.useRef<HTMLIFrameElement>(null);
  React.useEffect(() => {
    const player = new Player(videoPlayer.current);
    player.getDuration().then(el => setDuration(el));
    player.getVideoTitle().then(el => setVideoTitle(el));
  }, []);

  /**
   * convert duration
   */

  const minutes = Math.floor(duration / 60);
  const seconds = ('0' + (duration - minutes * 60)).slice(-2);

  return (
    <div
      className={styles.videoCard}
      style={{
        backgroundImage: `url(${pictureUrl})`
      }}
    >
      <iframe
        ref={videoPlayer}
        src={`https://player.vimeo.com/video/${videoId}`}
        hidden
      />
      <div className={styles.controls}>
        <Popup
          contentStyle={{
            border: 'none',
            background: 'transparent',
            width: 'auto'
          }}
          trigger={
            <div className={styles.watchButton}>
              <WatchButton
                time={`${minutes}: ${seconds}`}
                titleText={!customTitle ? videoTitle : customTitle}
              />
            </div>
          }
          position='top center'
          modal
          lockScroll
          closeOnDocumentClick
        >
          <ReactPlayer
            light
            url={`https://player.vimeo.com/video/${videoId}`}
            style={{ margin: 'auto', maxWidth: '100%' }}
            stopOnUnmount
            controls
            playing
          />
        </Popup>
      </div>
    </div>
  );
};

export { VideoCard };
