import { ScrollToTop } from '@app';
import { State } from '@app/redux/state';
import { Preloader } from '@core/components';
import { FaqBlock, PartnerApply } from '@pages/components';
import { Impact } from '@pages/homepage/sections';
import {} from '@ui/modal';
import { Preloaders } from '@ui/models';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ContactUsModal } from './components/contact-us-modal';
import { useProgramData } from './hooks';
import { ProgramPageProps } from './program-page.props';
import * as styles from './program-page.scss';
import {
  Enroll,
  ProgramAbout,
  ProgramEnrollNow,
  ProgramIntro,
  ProgramLearningApproach,
  ProgramMaterials,
  ProgramMentors,
  ProgramModules,
  ProgramOverview,
  ProgramQuote,
  ProgramResults
} from './sections';

/**
 * Renders ProgramPage
 */
const ProgramPage: React.FC<ProgramPageProps> = ({}) => {
  const history = useHistory();

  const searchParams = new URLSearchParams(history.location.search);
  const programId = searchParams.get('programId');
  const { t } = useTranslation();
  const {
    localization: { language },
    cart: { selectedProducts }
  } = useSelector((state: State) => state);

  const { singleProgram } = useProgramData(language, programId);

  console.log(singleProgram);
  const inCart = selectedProducts?.some(one => one.path == programId);

  return (
    <div className={styles.programPage}>
      <ScrollToTop />
      <Preloader id={Preloaders.programs} className={styles.preloader}>
        <ProgramIntro data={singleProgram} />
        <ProgramOverview data={singleProgram} />
        <div className={styles.hr} />
        <ProgramAbout data={singleProgram} />
        <div className={styles.hr} />
        <Enroll data={singleProgram} />
        <ProgramModules data={singleProgram} />
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${singleProgram?.imageDivider.file.url})`
          }}
        />
        <ProgramResults data={singleProgram} />
        <ProgramMentors
          modifiedCaption
          contributors={singleProgram?.mentors}
          url={`${history.location.pathname}?programId=${programId}&/mentor`}
        />
        <ProgramLearningApproach data={singleProgram} />
        <ProgramMaterials data={singleProgram} />
        <Impact loading={false} data={singleProgram} />
        <div className={styles.hr} />
        <ProgramEnrollNow
          data={singleProgram}
          programId={programId}
          inCart={inCart}
        />
        <ProgramQuote data={singleProgram} />
        <FaqBlock showTitle />
        <PartnerApply
          title={t('program-page.partner-apply.title')}
          subtitle={t('program-page.partner-apply.sub-title')}
        />
        <ContactUsModal />
      </Preloader>
    </div>
  );
};

export { ProgramPage };
