import * as React from 'react';
import { ProgramPageProps } from './program-page.props';
import * as styles from './program-page.scss';
import { Footer } from '@core/components';
import { ScrollToTop } from '@app';
import {
  ProgramIntro,
  ProgramOverview,
  ProgramAbout,
  Enroll,
  ProgramModules,
  ProgramResults,
  ProgramLearningApproach,
  ProgramMaterials,
  ProgramEnrollNow,
  ProgramQuote,
  ProgramMentors
} from './sections';
import { Impact } from '@pages/homepage/sections';
import { FaqBlock, PartnerApply } from '@pages/components';
import { useHistory } from 'react-router';
import {
  useProgramPageDataMentors,
  useProgramPageDataDivider,
  useProgramPageDataTestimonials
} from './hooks';
import { useTranslation } from 'react-i18next';
import { State } from '@app/store/state';
import { useSelector } from 'react-redux';

/**
 * Renders ProgramPage
 */
const ProgramPage: React.FC<ProgramPageProps> = ({}) => {
  const history = useHistory();
  const searchParams = new URLSearchParams(history.location.search);
  const programId = searchParams.get('programId');
  const { t } = useTranslation();
  const { language } = useSelector((state: State) => state.localization);
  const {
    mentorsForCurrentCourse,
    mentorsForCurrentCourseLoading
  } = useProgramPageDataMentors(programId, language);

  const { programPageDividerImage } = useProgramPageDataDivider(programId);
  const {
    programPageTestimonials,
    programPageTestimonialsLoading
  } = useProgramPageDataTestimonials(programId, language);

  return (
    <div className={styles.programPage}>
      <ScrollToTop />
      <ProgramIntro programId={programId} />
      <ProgramOverview programId={programId} />
      <div className={styles.hr} />
      <ProgramAbout programId={programId} />
      <div className={styles.hr} />
      <Enroll programId={programId} title={t('program-page.enroll.title')} />
      <ProgramModules programId={programId} />
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${programPageDividerImage})`
        }}
      />
      <ProgramResults programId={programId} />
      <ProgramMentors
        modifiedCaption
        contributors={mentorsForCurrentCourse}
        loading={mentorsForCurrentCourseLoading}
        url={`${history.location.pathname}?programId=${programId}&/mentor`}
      />
      <ProgramLearningApproach programId={programId} />
      <ProgramMaterials programId={programId} />
      <Impact
        testimonials={programPageTestimonials}
        loading={programPageTestimonialsLoading}
      />
      <div className={styles.hr} />
      <ProgramEnrollNow programId={programId} />
      <ProgramQuote programId={programId} />
      <FaqBlock showTitle />
      <PartnerApply
        title={t('program-page.partner-apply.title')}
        subtitle={t('program-page.partner-apply.sub-title')}
      />
      {/* <Footer /> */}
    </div>
  );
};

export { ProgramPage };
