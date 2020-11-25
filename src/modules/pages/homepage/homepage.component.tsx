import * as React from 'react';
import * as styles from './homepage.scss';
import { FaqBlock, MentorModal } from '@pages/components';
import { Footer, Spinner } from '@core/components';
import {
  SupportInfo,
  OnlineCourses,
  Quote,
  About,
  TrainingInfo,
  Impact,
  InsightsBlock,
  Socials,
  Intro,
  UnlimitedAccessBooks
} from './sections';
import { EBooks } from './sections/e-books';
import { HomepageProps } from './homepage.props';
import Mentors from '@pages/homepage/sections/mentors/mentors.component';
import { State } from '@app/redux/state';
import { useContributorsData } from '@pages/contributors/contributor.hook';
import { useHomePageData } from './homepage.hook';
import { useDispatch, useSelector } from 'react-redux';
import { SubscribeModal } from '@pages/components/subscribe-modal';
import { showModal } from '@ui/modal';
import { Modals } from '@ui/models';
import { FormResultModal } from '@pages/components/form-result-modal';
import { SubscribeBetaSuccessModal } from '@pages/components/subscribe-beta-modal';
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
    if (showSubscribeModal) {
      setTimeout(() => dispatch(showModal(Modals.subscribe)), 2000);
    }
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
        {/* <Footer /> */}
      </div>
      <SubscribeModal />
      <SubscribeBetaSuccessModal />
    </React.Suspense>
  );
};

export { Homepage };
