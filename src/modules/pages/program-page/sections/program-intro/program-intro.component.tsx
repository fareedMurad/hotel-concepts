import * as React from 'react';
import { ProgramIntroProps } from './program-intro.props';
import * as styles from './program-intro.scss';
import Popup from 'reactjs-popup';
import ReactPlayer from 'react-player';
import { WatchButton } from '@core/components/watch-button';
import { Button } from '@core/components';
import { useProgramData } from './progtam-intro.hook';
import { ProgramNavButton } from '@pages/program-page/components/program-nav-button';

/**
 * Renders ProgramIntro
 */
const ProgramIntro: React.FC<ProgramIntroProps> = ({}) => {
  const videoRef = React.useRef() as React.MutableRefObject<HTMLVideoElement>;
  const [video, setVideo] = React.useState<HTMLVideoElement>();
  const { navButtons } = useProgramData();

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
    <section className={styles.programIntro}>
      <div className={styles.title}>
        <div>Intial Hotel Planning Decisions Course</div>
        <div>We know which problems hoteliers face every day and we are ready to solve these problems.</div>
      </div>
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

      <div className={styles.pageNavigator}>
        {navButtons.map((button, index) => (
          <ProgramNavButton name={button} index={index} key={index} />
        ))}
        <Button className={styles.button}>
          <div>Enroll now</div> <div>→</div>
        </Button>
      </div>

      {/* <video
        ref={videoRef}
        className={styles.video}
        src={require('videos/HomePage.preview.mov')}
        muted={true}
      /> */}
    </section>
  );
};

export { ProgramIntro };
