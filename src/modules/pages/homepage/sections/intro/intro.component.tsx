import * as React from 'react';
import { IntroProps } from './intro.props';
import * as styles from './intro.scss';
import Popup from 'reactjs-popup';
import ReactPlayer from 'react-player';
import { WatchButton } from '@core/components/watch-button';
import { ScrollButton } from '@core/components/scroll-button';
import { Button } from '@core/components';
// import introVideo from '../../../../../assets/videos/HomePage.preview.mov';

/**
 * Renders Intro
 */
const Intro: React.FC<IntroProps> = ({}) => {
  const videoRef = React.useRef() as React.MutableRefObject<HTMLVideoElement>;

  const [video, setVideo] = React.useState<HTMLVideoElement>();

  React.useEffect(() => {
    if (videoRef.current) {
      setVideo(videoRef.current);
    }
  }, [videoRef]);

  const playVideo = () => {
    if (video) {
      video.play();
      video.style.opacity = '1';
      video.style.visibility = 'visible';
    }
  };

  const stopVideo = () => {
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.style.opacity = '0';
      video.style.visibility = 'hidden';
    }
  };

  return (
    <section className={styles.intro}>
      <div className={styles.title}>
        <div>Cutting edge online education for hospitality</div>
        <div>Bridging the skills  gap for hotel managers</div>
      </div>
      <Button className={styles.findButton}>
        <div>Find the program</div> <div>→</div>
      </Button>
      <Popup
        contentStyle={{
          border: 'none',
          background: 'transparent',
          width: '100%',
        }}
        trigger={
          <div>
            <WatchButton
              onEnter={playVideo}
              onLeave={stopVideo}
              time="0:56"
              titleText="Watch Trailer"
            />
          </div>
        }
        position="top center"
        modal={true}
        lockScroll={true}
      >
        <ReactPlayer
          url="https://vimeo.com/376809414"
          controls={true}
          style={{ margin: 'auto', maxWidth: '100%' }}
        />
      </Popup>

      {/* <video
        ref={videoRef}
        className="Intro-screen__video"
        src={'../../../../../assets/videos/HomePage.preview.mov'}
        muted={true}
      /> */}

      <ScrollButton text="Scroll" className={styles.scrollButton} />

    </section>
  );
};

export { Intro };
