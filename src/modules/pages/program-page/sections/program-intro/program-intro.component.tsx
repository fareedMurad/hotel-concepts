import { State } from '@app/redux/state';
import { Button, Preloader } from '@core/components';
import { BackButton } from '@core/components/back-button';
import { SEO } from '@core/components/seo/seo.component';
import { WatchButton } from '@core/components/watch-button';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useMediaPoints } from '@core/shared';
import { ProgramNavButton } from '@pages/program-page/components/program-nav-button';
import { Preloaders } from '@ui/models';
import Player from '@vimeo/player';
import * as React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import { useProgramIntroData } from './program-intro.hook';
import { ProgramIntroProps } from './program-intro.props';
import * as styles from './program-intro.scss';

/**
 * Renders ProgramIntro
 */
const ProgramIntro: React.FC<ProgramIntroProps> = ({ data }) => {
  const { tablet, mobile, desktop } = useMediaPoints();
  const {
    localization: { language },
    general: {
      browserVersion: { name, version }
    }
  } = useSelector((state: State) => state);
  const { navButtons } = useProgramIntroData();
  const oldSafari = name === 'Safari' && version < '14';

  const background =
    (desktop && 'https://i.imgur.com/qBsBGcc.jpg') ||
    (mobile && 'https://i.imgur.com/kkNPsrC.jpg') ||
    (tablet && 'https://i.imgur.com/WPpEyNk.jpg');

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
    if (data) {
      const player = new Player(videoPlayer.current);
      player.getDuration().then(el => setDuration(el));
      setPreviewVideo(previewUrl);
    }
  }, [videoRef, data]);

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

  const url = data?.heroImage.file.url;

  const imageSrc = oldSafari ? `${url}?h=900&w=1440` : `${url}?fm=webp`;
  const reducedImage = `${imageSrc}&h=500&w=500&q=60`;
  const fullImage = `${imageSrc}&h=900&w=1440`;

  const [image, setImage] = React.useState(reducedImage);

  React.useEffect(() => {
    if (reducedImage && !fullImage) {
      setImage(reducedImage);
      return;
    }
    const imageLoader = new Image();
    imageLoader.src = fullImage;
    imageLoader.onload = () => {
      setImage(fullImage);
      //  setIsImageLoaded(true);
    };
  }, [fullImage, reducedImage]);

  const getVideoId = url => url?.split('/').pop();
  /**
   * convert duration
   */

  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration - minutes * 60);

  const previewUrl = data?.previewVideo.video.file.url;

  return (
    <Preloader cover id={Preloaders.programs}>
      <SEO
        title={data?.name}
        thumbnail={data?.heroImage.file.url}
        url={window.location.href}
      />
      <section
        className={styles.programIntro}
        style={{
          backgroundImage: `url(${background})`
        }}
      >
        {/* <BackButton className={styles.backButton} /> */}
        <div className={styles.contentOverlay}>
          <div className={styles.content}>
            <div className={styles.caption}>Online course</div>
            <div>{data?.name}</div>
            <div>{data?.description}</div>
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
                arrow
                width='inherit'
              />
            </div>
            <div className={styles.buttons}>
              {!desktop && (
                <Button
                  onClick={scrollToEnroll}
                  className={styles.enrollMobile}
                  children='Enroll now'
                  arrow
                />
              )}
              <Button className={styles.download}>
                <span>Download Syllabus</span>
                <img src={require('img/dowmload.svg')} />
              </Button>
              <Popup
                contentStyle={{
                  border: 'none',
                  background: 'transparent',
                  width: '100%'
                }}
                trigger={
                  <WatchButton
                    // onEnter={playVideo}
                    onLeave={stopVideo}
                    time={`${minutes}: ${seconds}`}
                    titleText='Watch Trailer'
                    theme='secondary'
                    className={styles.watchButton}
                  />
                }
                position='top center'
                modal
                lockScroll
              >
                <ReactPlayer
                  url={`${data?.videoVimeoUrl}`}
                  controls
                  style={{ margin: 'auto', maxWidth: '100%' }}
                />
              </Popup>
            </div>
          </div>

          <iframe
            ref={videoPlayer}
            src={`https://player.vimeo.com/video/${getVideoId(
              data?.videoVimeoUrl
            )}`}
            allowFullScreen
            hidden
          />
        </div>

        <video ref={videoRef} className={styles.video} src={previewUrl} muted />
      </section>
    </Preloader>
  );
};

export { ProgramIntro };
