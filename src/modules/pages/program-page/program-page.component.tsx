import * as React from 'react';
import { ProgramPageProps } from './program-page.props';
import * as styles from './program-page.scss';
import { Header } from '@core/components/header';
import { Mentors } from '@pages/homepage/sections/mentors';
import { Impact } from '@pages/homepage/sections/impact';
import { Footer, Spinner } from '@core/components';
import { ProgramIntro } from './sections/program-intro';
import { ProgramOverview } from './sections/program-overview';
import { ProgramAbout } from './sections/program-about';
import { Enroll } from './sections/enroll';
import { ProgramResults } from './sections/program-results';
import { ProgramMaterials } from './sections/program-materials';
import { ProgramQuote } from './sections/program-quote';
import { ProgramLearningApproach } from './sections/program-learning-approach';
import { FaqBlock, PartnerApply } from '..';
import { ProgramEnrollNow } from './sections/program-enroll-now';
import { useHistory } from 'react-router';
import { useProgramPageData } from './program-page.hook';
import { ProgramModules } from './sections/program-modules';
import { ScrollToTop } from '@app';
import { ProgramQuestionsForm } from './sections/program-questions-form';
import { gql, useQuery } from '@apollo/client';
/**
 * query program info
 */

const GET_MENTORS = gql`
  query($id: String!) {
    onlineCourse(id: $id) {
      additionalMaterials
      mentorsCollection {
        items {
          name
          surname
          city
          position
          mentorPicture {
            url
          }
        }
      }
    }
  }
`;

/**
 * Renders ProgramPage
 */
const ProgramPage: React.FC<ProgramPageProps> = ({}) => {
  const history = useHistory();
  const searchParams = new URLSearchParams(history.location.search);
  const programId = searchParams.get('programId');
  const { learningApproach } = useProgramPageData();

  /**
   * Getting mentors
   */
  const { data, loading, error } = useQuery(GET_MENTORS, {
    variables: { id: programId }
  });

  const mentorsForCurrrentCourse = data?.onlineCourse?.mentorsCollection?.items;
  const additionalMaterials = data?.onlineCourse?.additionalMaterials;
  console.log(data);
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
      {/* <div className={styles.img} style={{ backgroundImage: `url(${url})` }} /> */}
      <ProgramResults programId={programId} />
      <Mentors
        contributors={mentorsForCurrrentCourse}
        loading={loading}
        url={`${history.location.pathname}?programId=${programId}&/mentor`}
      />
      <ProgramLearningApproach learningApproach={learningApproach} />
      <ProgramMaterials
        additionalMaterials={additionalMaterials}
        loading={loading}
      />
      <Impact />
      <div className={styles.hr} />
      <ProgramEnrollNow />
      <ProgramQuote />
      <FaqBlock showTitle />
      <PartnerApply
        title='Got questions?'
        subtitle='Whether you are an individual or an organisation/group, looking for a
                  programme, get in touch and we can help find the best solution for you.'
      />
      {/* <ProgramQuestionsForm /> */}
      <Footer />
    </div>
  );
};

export { ProgramPage };
