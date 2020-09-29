import * as React from 'react';
import { IntroProps } from './intro.props';
import * as styles from './intro.scss';
import Popup from 'reactjs-popup';
import ReactPlayer from 'react-player';
import { WatchButton } from '@core/components/watch-button';
import { ScrollButton } from '@core/components/scroll-button';
import { Button, HeroTitle, HeroSubtitle } from '@core/components';
import { useHistory } from 'react-router';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

/**
 *  preview video query
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
    asset(id: "17ZH29S9Eo67M4Q4exNUwF") {
      url(transform: { format: JPG_PROGRESSIVE, quality: 75 })
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

  React.useEffect(() => {
    if (videoRef.current) {
      setVideo(videoRef.current);
    }
    if (!loading) {
      const previewVideoUrl =
        data.homePagePreviewVideoCollection.items[0].video.url;
      setPreviewVideo(previewVideoUrl);
    }
  }, [videoRef, data, loading]);

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
    <section
      className={styles.intro}
      style={{ backgroundImage: `url(${data?.asset?.url})` }}
    >
      <HeroTitle>{t('home.hero.hero-title')}</HeroTitle>
      <HeroSubtitle className={styles.subtitle}>
        {t('home.hero.hero-subtitle')}
      </HeroSubtitle>
      <Button
        className={styles.findButton}
        onClick={scrollToEnroll}
        children={t('home.hero.button-text')}
        arrow
        width={230}
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
          url='https://vimeo.com/376809414'
          controls
          style={{ margin: 'auto', maxWidth: '100%' }}
        />
      </Popup>

      <video ref={videoRef} className={styles.video} src={previewVideo} muted />

      <ScrollButton
        text={t('home.hero.scroll')}
        className={styles.scrollButton}
      />
    </section>
  );
};

export { Intro };
