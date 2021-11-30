import { gql, useQuery } from '@apollo/client';
import { Button, HeroSubtitle, HeroTitle } from '@core/components';
import { ScrollButton } from '@core/components/scroll-button';
import { WatchButton } from '@core/components/watch-button';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useMediaPoints } from '@core/shared';
import { LazyBackground } from '@pages/components/lazy-background/lazy-background.component';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ReactPlayer from 'react-player';
import Popup from 'reactjs-popup';
import { IntroProps } from './intro.props';
import * as styles from './intro.scss';

/**
 *  preview video & hero image query
 */
const GET_PREVIEW_VIDEO = gql`
  {
    homePagePreviewVideoCollection {
      items {
        video {
          url
        }
      }
    }
    heroImagesCollection(where: { page: "Home" }) {
      items {
        page
        fullImage {
          sys {
            id
          }
        }
        reducedImage {
          sys {
            id
          }
        }
        mobileCoverImage {
          sys {
            id
          }
        }
      }
    }
  }
`;

/**
 * Renders Intro
 */
const Intro: React.FC<IntroProps> = ({}) => {
  const videoRef = React.useRef() as React.MutableRefObject<HTMLVideoElement>;
  const [previewVideo, setPreviewVideo] = React.useState('');
  const [video, setVideo] = React.useState<HTMLVideoElement>();
  const [videoPromise, setVideoPromise] = React.useState<Promise<any>>(null);
  const { data, loading, error } = useQuery(GET_PREVIEW_VIDEO);
  const { t } = useTranslation();
  const { mobile } = useMediaPoints();

  /**
   * Handle video
   */
  // React.useEffect(() => {
  //   if (videoRef.current) {
  //     setVideo(videoRef.current);
  //   }
  //   if (!loading) {
  //     const previewVideoUrl =
  //       data?.homePagePreviewVideoCollection?.items[0].video.url;
  //     setPreviewVideo(previewVideoUrl);
  //   }
  // }, [videoRef, data, loading]);

  // Hero images ids
  const mobileImageId =
    mobile && data?.heroImagesCollection?.items[0].mobileCoverImage.sys.id;
  const fullImageId = data?.heroImagesCollection?.items[0].fullImage.sys.id;
  const reducedImageId =
    data?.heroImagesCollection?.items[0].reducedImage.sys.id;

  // const playVideo = () => {
  //   if (video) {
  //     video.play();
  //     video.style.opacity = '1';
  //     video.style.visibility = 'visible';
  //     setVideoPromise(video.play());
  //   }
  // };

  // const stopVideo = async () => {
  //   if (video) {
  //     await videoPromise;
  //     video.pause();
  //     video.currentTime = 0;
  //     video.style.opacity = '0';
  //     video.style.visibility = 'hidden';
  //     setVideoPromise(null);
  //   }
  // };

  const scrollToEnroll = () => {
    scrollTo('online-courses');
  };
  return (
    <section className={styles.intro}>
      <LazyBackground
        className={styles.background}
        reducedImageId={reducedImageId}
        fullImageId={mobileImageId || fullImageId}
        bgColor={'#F5F1F0'}
      />
      <div className={styles.introContent}>
        <div className={styles.introText}>
          <img src={require('img/orPattern.svg')} alt='' />
          <HeroTitle className={styles.title}>
            <div>{t('home.hero.hero-title.first-part')}</div>
            <div>{t('home.hero.hero-title.second-part')}</div>
          </HeroTitle>
          <HeroSubtitle className={styles.subtitle}>
            {t('home.hero.hero-subtitle')}
          </HeroSubtitle>
        </div>
        <img
          className={styles.introImg}
          src={require('img/intro-pattern.png')}
          alt=''
        />
      </div>

      {/* <Button
        className={styles.findButton}
        onClick={scrollToEnroll}
        children={t('home.hero.button-text')}
        arrow
        width={230}
      /> */}

      {/* <Popup
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
              titleText={t('home.hero.video')}
            />
          </div>
        }
        position='top center'
        modal
        lockScroll
      >
        <ReactPlayer
          // url='https://vimeo.com/376809414'
          url={previewVideo}
          playing
          controls
          style={{ margin: 'auto', maxWidth: '100%' }}
        />
      </Popup> */}

      {/* <video ref={videoRef} className={styles.video} src={previewVideo} muted /> */}

      <ScrollButton
        // text={t('home.hero.scroll')}
        className={styles.scrollButton}
        orangeType={true}
      />
    </section>
  );
};

export { Intro };
