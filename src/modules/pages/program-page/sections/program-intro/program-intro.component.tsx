import * as React from 'react';
import { ProgramIntroProps } from './program-intro.props';
import * as styles from './program-intro.scss';
import Popup from 'reactjs-popup';
import ReactPlayer from 'react-player';
import { WatchButton } from '@core/components/watch-button';
import { Button } from '@core/components';
import { useProgramData } from './progtam-intro.hook';
import { ProgramNavButton } from '@pages/program-page/components/program-nav-button';
import { BackButton } from '@core/components/back-button';
<<<<<<< HEAD
import { scrollTo } from '@core/helpers/scroll-to.helper';
=======
import { useParams } from 'react-router';
>>>>>>> COR-20

/**
 * Renders ProgramIntro
 */

/**
 *
 */
const ProgramIntro: React.FC<ProgramIntroProps> = ({ introInfo }) => {
  const { name, description, videoVimeoUrl } = introInfo;
  const videoInfo = {
    path: 'ForCorporateClients.preview',
    time: '0:56'
  };
  const videoRef = React.useRef() as React.MutableRefObject<HTMLVideoElement>;
  const [video, setVideo] = React.useState<HTMLVideoElement>();
  const { navButtons } = useProgramData();
  const [videoPromise, setVideoPromise] = React.useState<Promise<any>>(null);
  const scrollToEnroll = () => {
    scrollTo("enroll");
  }

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

  return (
    <section className={styles.programIntro}>
      <BackButton className={styles.backButton} />
      <div className={styles.title}>
        <div>{name}</div>
        <div>{description}</div>
      </div>
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
              time={videoInfo.time}
              titleText='Watch Trailer'
            />
          </div>
        }
        position='top center'
        modal={true}
        lockScroll={true}
      >
        <ReactPlayer
          url={`${videoVimeoUrl}`}
          controls={true}
          style={{ margin: 'auto', maxWidth: '100%' }}
        />
      </Popup>

      <div className={styles.pageNavigator}>
        {navButtons.map((button, index) => (
          <ProgramNavButton
            anchor={button.anchor}
            name={button.name}
            index={index}
            key={index}
          />
        ))}
<<<<<<< HEAD
        <Button onClick={scrollToEnroll} className={styles.button}>
=======
        <a href='#enroll' className={styles.button}>
>>>>>>> COR-20
          <div>Enroll now</div> <div>→</div>
        </Button>
      </div>

      <video
        ref={videoRef}
        className={styles.video}
        src={require(`assets/videos/${videoInfo.path}.mov`)}
        muted={true}
      />
    </section>
  );
};

export { ProgramIntro };
