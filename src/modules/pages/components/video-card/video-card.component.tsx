import * as React from 'react';
import { VideoCardProps } from './video-card.props';
import * as styles from './video-card.scss';
import { WatchButton } from '@core/components/watch-button';
import Popup from 'reactjs-popup';
import ReactPlayer from 'react-player';
import Player from '@vimeo/player/src/player.js'

/**
 * Renders VideoCard
 */
const VideoCard: React.FC<VideoCardProps> = ({ title, preview }) => {
  const [duration, setDuration] = React.useState()
  const videoPlayer = React.useRef<ReactPlayer>(null)
  React.useEffect(() => {
    console.log(videoPlayer.current)

  }, [])
  var player = new Player(videoPlayer)
  console.log(player)
  return (
    <div
      className={styles.videoCard}
      style={{
        backgroundImage: `url(${require(`img/${preview}.png`)})`
      }}
    >
      <ReactPlayer

        ref={videoPlayer}
        light
        key='vimeo'
        url='https://vimeo.com/376809414'
        controls
        style={{ margin: 'auto', maxWidth: '100%' }}
      />
      {/* <iframe ref={videoPlayer} src="https://player.vimeo.com/video/376809414" width="300px" height="300px" allowFullScreen></iframe>
      <div className={styles.controls}> */}
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


          light

          url='https://vimeo.com/376809414'
          controls
          style={{ margin: 'auto', maxWidth: '100%' }}
        />
      </Popup>
    </div >

  );
};

export { VideoCard };
