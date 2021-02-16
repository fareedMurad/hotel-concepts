import { WatchButton } from '@core/components/watch-button';
import * as React from 'react';
import ReactPlayer from 'react-player';
import Popup from 'reactjs-popup';
import { ProgramPreviewImageProps } from './program-preview-image.props';
import * as styles from './program-preview-image.scss';
import Player from '@vimeo/player';

/**
 * Renders ProgramPreviewImage
 */
const ProgramPreviewImage: React.FC<ProgramPreviewImageProps> = ({
  imageSrc,
  previewVideo
}) => {
  const videoRef = React.useRef(null) as React.MutableRefObject<
    HTMLIFrameElement
  >;
  const [duration, setDuration] = React.useState(0);

  const getVideoId = url => url?.split('/').pop();

  /**
   * Handle vimeo video
   */

  React.useEffect(() => {
    if (videoRef.current) {
      const player = new Player(videoRef.current);
      player.setAutopause(false);
      console.log(player);
      player.getDuration().then(el => setDuration(el));
    }
  }, [videoRef.current]);

  /**
   * convert duration
   */
  const minutes = Math.floor(duration / 60);
  const seconds = duration - minutes * 60;

  return (
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {previewVideo && (
        <>
          (
          <Popup
            contentStyle={{
              border: 'none',
              background: 'transparent',
              width: '100%'
            }}
            trigger={
              <div className={styles.imageWatchButton}>
                <WatchButton
                  time={`0${minutes}:${seconds === 0 ? '00' : seconds}`}
                  titleText='Play preview'
                />
              </div>
            }
            position='top center'
            modal
            lockScroll
          >
            <ReactPlayer
              url={`${previewVideo}`}
              controls
              style={{ margin: 'auto', maxWidth: '100%' }}
              muted={true}
              playing={true}
            />
          </Popup>
          <iframe
            src={`https://player.vimeo.com/video/${getVideoId(previewVideo)}`}
            allowFullScreen
            ref={videoRef}
            hidden
          />
        </>
      )}
    </div>
  );
};

export { ProgramPreviewImage };
