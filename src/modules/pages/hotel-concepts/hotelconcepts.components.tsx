import { State } from '@app/redux/state';
import { Spinner } from '@core/components';
import { useContributorsData } from '@pages/contributors/contributor.hook';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useHotelConceptData } from './hotelconcepts.hook';
import { HotelConceptProps } from './hotelconcepts.props';
import * as styles from './hotelconcepts.scss';
import {
  HeroSection,
  AboutCourses,
  KeyLearnings,
  QuotesHotels,
  WhoEnroll,
  Benifits,
  WinningConcepts,
  PeekProgressVideo,
  CourseSpecial,
  Syllabus,
  CourseAuthors,
  LearningModal,
  Certificate,
  Testimonials,
  Pricing,
  AskQuestions,
  QuestionsLeft
} from './sections';
// import { Faq } from './sections/faq';
/**
 * Renders HOTELCONCEPTS
 */
const HotelConcepts: React.FC<HotelConceptProps> = () => {
  const {
    localization: { language }
  } = useSelector((state: State) => state);
  const { contributors, loading } = useContributorsData(language);
  const {
    hotelconceptsTestimonials,
    hotelconceptsTestimonialsLoading
  } = useHotelConceptData(language);
  return (
    <React.Suspense fallback={<Spinner />}>
      <div className={styles.hotelconcepts}>
        <HeroSection />
        <AboutCourses />
        <KeyLearnings />
        <QuotesHotels />
        <WhoEnroll />
        <Benifits />
        <WinningConcepts />
        <PeekProgressVideo />
        <CourseSpecial />
        <Syllabus />
        <CourseAuthors />
        <LearningModal />
        <Certificate />
        <Testimonials />
        <Pricing />
        <AskQuestions />
        <QuestionsLeft />
      </div>
    </React.Suspense>
  );
};

export { HotelConcepts };
