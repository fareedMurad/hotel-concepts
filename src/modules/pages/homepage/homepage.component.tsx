import { State } from '@app/redux/state';
import { Modal, Spinner } from '@core/components';
import { FaqBlock } from '@pages/components';
import { SubscribeBetaSuccessModal } from '@pages/components/subscribe-beta-modal';
import { SubscribeModal } from '@pages/components/subscribe-modal';
import { useContributorsData } from '@pages/contributors/contributor.hook';
import Mentors from '@pages/homepage/sections/mentors/mentors.component';
import { closeModal, showModal } from '@ui/modal';
import { Modals } from '@ui/models';
import * as React from 'react';
import { ConsoleView } from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux';
import { useHomePageData } from './homepage.hook';
import { HomepageProps } from './homepage.props';
import * as styles from './homepage.scss';
import {
  About,
  Impact,
  Intro,
  OnlineCourses,
  Socials,
  SupportInfo,
  TrainingInfo,
  UnlimitedAccessBooks
} from './sections';
import { EBooks } from './sections/e-books';
/**
 * Renders Homepage
 */
const Homepage: React.FC<HomepageProps> = ({}) => {
  const {
    localization: { language },
    form: { showSubscribeModal }
  } = useSelector((state: State) => state);
  const { contributors, loading } = useContributorsData(language);
  const { homePageTestimonials, homepageTestimonialsLoading } = useHomePageData(
    language
  );
  //temporary

  const dispatch = useDispatch();

  React.useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        dispatch(showModal(Modals.subscribe));
      }, 3000);
    });
    return () =>
      window.removeEventListener('load', () => {
        dispatch(closeModal(Modals.subscribe));
      });
  }, [showSubscribeModal]);

  return (
    <React.Suspense fallback={<Spinner />}>
      <div className={styles.homepage}>
        <Intro />
        <SupportInfo />
        <OnlineCourses />
        <TrainingInfo />
        <EBooks />
        <UnlimitedAccessBooks />
        {/* <UnlimitedAccess />
         */}
        {/* <Quote /> */}
        <About />
        <Impact
          testimonials={homePageTestimonials}
          loading={homepageTestimonialsLoading}
        />
        <Mentors contributors={contributors} loading={loading} url='mentor' />
        <FaqBlock showTitle />
        {/* <InsightsBlock /> */}
        <Socials />
      </div>
      <SubscribeModal />
      <SubscribeBetaSuccessModal />
    </React.Suspense>
  );
};

export { Homepage };
