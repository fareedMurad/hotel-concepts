import * as React from 'react';
import { IntroProps } from './intro.props';
import * as styles from './intro.scss';
import Popup from 'reactjs-popup';
import ReactPlayer from 'react-player';
import { WatchButton } from '@core/components/watch-button';
import { ScrollButton } from '@core/components/scroll-button';
import { Button } from '@core/components';
import { useHistory } from 'react-router';
import { scrollTo } from '@core/helpers/scroll-to.helper';

/**
 * Renders Intro
 */
const Intro: React.FC<IntroProps> = ({}) => {
  const videoRef = React.useRef() as React.MutableRefObject<HTMLVideoElement>;

  const [video, setVideo] = React.useState<HTMLVideoElement>();
  const [videoPromise, setVideoPromise] = React.useState<Promise<any>>(null);

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
      setVideoPromise(video.play());
    }
  };

  const stopVideo = async () => {
    if (video) {
      await videoPromise;
      video.pause();
      video.currentTime = 0;
      video.style.opacity = '0';
      video.style.visibility = 'hidden';
      setVideoPromise(null);
    }
  };

  const scrollToEnroll = () => {
    scrollTo('online-courses');
  };

  return (
    <section className={styles.intro}>
      <div className={styles.title}>
        <div>Cutting edge online education for hospitality</div>
        <div>Bridging the skills gap for hotel managers</div>
      </div>
      <Button className={styles.findButton} onClick={scrollToEnroll}>
        <div>Find the program</div> <div>→</div>
      </Button>
      <Popup
        contentStyle={{
          border: 'none',
          background: 'transparent',
          width: '100%'
        }}
        trigger={
          <div className={styles.watchButton}>
            <WatchButton
              onEnter={playVideo}
              onLeave={stopVideo}
              time='0:56'
              titleText='Watch Trailer'
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

      <video
        ref={videoRef}
        className={styles.video}
        src={require('assets/videos/HomePage.preview.mov')}
        muted
      />

      <ScrollButton text='Scroll' className={styles.scrollButton} />
    </section>
  );
};

export { Intro };
