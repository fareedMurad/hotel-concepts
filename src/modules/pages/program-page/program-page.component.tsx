import * as React from 'react';
import { ProgramPageProps } from './program-page.props';
import * as styles from './program-page.scss';
import { Header } from '@core/components/header';
import { Footer } from '@core/components';
import { ScrollToTop } from '@app';
import { useProgramPageData } from './program-page.hook';
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
  ProgramQuote
} from './sections';
import { Mentors, Impact } from '@pages/homepage/sections';
import { FaqBlock, PartnerApply } from '@pages/components';
import { gql, useQuery } from '@apollo/client';
import { useParams, useHistory } from 'react-router';

/**
 * Renders ProgramPage
 */
const ProgramPage: React.FC<ProgramPageProps> = ({}) => {
  const history = useHistory();
  const searchParams = new URLSearchParams(history.location.search);
  const programId = searchParams.get('programId');
  const {
    mentorsForCurrentCourse,
    mentorsForCurrentCourseLoading
  } = useProgramPageData(programId);

  const GET_DIVIDER_IMAGE = gql`
    query($id: String!) {
      onlineCourse(id: $id) {
        imageDivider {
          url
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_DIVIDER_IMAGE, {
    variables: { id: programId }
  });

  return (
    <div className={styles.programPage}>
      <ScrollToTop />
      <Header />
      <ProgramIntro programId={programId} />
      <ProgramOverview programId={programId} />
      <div className={styles.hr} />
      <ProgramAbout programId={programId} />
      <div className={styles.hr} />
      <Enroll programId={programId} />
      <ProgramModules programId={programId} />
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${data?.onlineCourse?.imageDivider?.url})`
        }}
      />
      <ProgramResults programId={programId} />
      <Mentors
        modifiedCaption
        contributors={mentorsForCurrentCourse}
        loading={mentorsForCurrentCourseLoading}
        url={`${history.location.pathname}?programId=${programId}&/mentor`}
      />
      <ProgramLearningApproach programId={programId} />
      <ProgramMaterials programId={programId} />
      <Impact />
      <div className={styles.hr} />
      <ProgramEnrollNow programId={programId} />
      <ProgramQuote programId={programId} />
      <FaqBlock showTitle />
      <PartnerApply
        title='Got questions?'
        subtitle='Whether you are an individual or an organisation/group, looking for a
                  programme, get in touch and we can help find the best solution for you.'
      />
      <Footer />
    </div>
  );
};

export { ProgramPage };
