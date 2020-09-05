import * as React from 'react';
import { ProgramIntroProps } from './program-intro.props';
import * as styles from './program-intro.scss';
import Popup from 'reactjs-popup';
import ReactPlayer from 'react-player';
import { WatchButton } from '@core/components/watch-button';
import { Button, Spinner } from '@core/components';
import { useProgramIntroData } from './program-intro.hook';
import { ProgramNavButton } from '@pages/program-page/components/program-nav-button';
import { BackButton } from '@core/components/back-button';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import Player from '@vimeo/player';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';

/**
 * Renders ProgramIntro
 */
const ProgramIntro: React.FC<ProgramIntroProps> = ({ programId }) => {
  const { language } = useSelector((state: State) => state.localization);
  const { programData, programDataLoading, navButtons } = useProgramIntroData(
    programId,
    language
  );

  const videoRef = React.useRef() as React.MutableRefObject<HTMLVideoElement>;
  const [previewVideo, setPreviewVideo] = React.useState('');
  const [video, setVideo] = React.useState<HTMLVideoElement>();
  const [videoPromise, setVideoPromise] = React.useState<Promise<any>>(null);
  const videoPlayer = React.useRef<HTMLIFrameElement>(null);
  const [duration, setDuration] = React.useState(0);
  const scrollToEnroll = () => {
    scrollTo('enroll');
  };
  React.useEffect(() => {
    if (videoRef.current) {
      setVideo(videoRef.current);
    }
    if (!programDataLoading) {
      const player = new Player(videoPlayer.current);
      player.getDuration().then(el => setDuration(el));
      setPreviewVideo(previewUrl);
    }
  }, [programDataLoading, videoRef, programData]);

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

  const getVideoId = url => url.split('/').pop();
  /**
   * convert duration
   */

  const minutes = Math.floor(duration / 60);
  const seconds = duration - minutes * 60;

  if (programDataLoading) return <Spinner />;

  const { videoVimeoUrl } = programData;

  const previewUrl = programData.previewVideo?.video?.url;

  return (
    <section
      className={styles.programIntro}
      style={{ backgroundImage: `url(${programData?.heroImage?.url})` }}
    >
      <BackButton className={styles.backButton} />
      <div className={styles.title}>
        <div>{programData?.name}</div>
        <div>{programData?.description}</div>
      </div>
      <iframe
        ref={videoPlayer}
        src={`https://player.vimeo.com/video/${getVideoId(videoVimeoUrl)}`}
        allowFullScreen
        hidden
      />
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
              time={`${minutes}: ${seconds}`}
              titleText='Watch Trailer'
            />
          </div>
        }
        position='top center'
        modal
        lockScroll
      >
        <ReactPlayer
          url={`${programData?.videoVimeoUrl}`}
          controls
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
        <Button
          onClick={scrollToEnroll}
          className={styles.button}
          children='Enroll now'
          arrow='→'
          width='inherit'
        />
      </div>

      <video ref={videoRef} className={styles.video} src={previewUrl} muted />
    </section>
  );
};

export { ProgramIntro };
