import * as React from 'react';
import { ProgramPageProps } from './program-page.props';
import * as styles from './program-page.scss';
import { Header } from '@core/components/header';
import { Mentors } from '@pages/homepage/sections/mentors';
import { Impact } from '@pages/homepage/sections/impact';
import { Footer } from '@core/components';
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
import { useParams } from 'react-router';
import { useProgramPageData } from './program-page.hook';
import { ProgramModules } from './sections/program-modules';
import { gql, useQuery } from '@apollo/client';
import { url } from 'inspector';

/**
 * query program info
 */
const GET_PROGRAM = gql`
  query($slug: String!) {
    onlineCourseCollection(where: { slug: $slug }) {
      items {
        courseType
        slug
        name
        description
        price
        duration
        whoShouldEnroll
        enrollBy
        additionalMaterials
        languages
        about
        results
        whoShouldEnroll
        modules
        amountOfWeeklyModules
        videoVimeoUrl
        backgroundPicture {
          url
        }
      }
    }
  }
`;

/**
 * Renders ProgramPage
 */
const ProgramPage: React.FC<ProgramPageProps> = ({}) => {
  const { slug } = useParams();
  const { data } = useProgramPageData();
  const pageData = data.filter(item => item.id == 1)[0];

  const { data: response, loading, error } = useQuery(GET_PROGRAM, {
    variables: { slug: slug }
  });

  if (loading) return <div>loading...</div>;

  const { items: courseInfo } = response.onlineCourseCollection;
  const {
    about,
    whoShouldEnroll,
    modules,
    amountOfWeeklyModules,
    backgroundPicture,
    results,
    additionalMaterials
  } = courseInfo[0];

  const { url } = backgroundPicture;

  return (
    <div className={styles.programPage}>
      <Header />
      <ProgramIntro introInfo={courseInfo[0]} />
      <ProgramOverview overview={courseInfo[0]} />
      <div className={styles.hr} />
      <ProgramAbout about={about} />
      <div className={styles.hr} />
      <Enroll shouldEnroll={whoShouldEnroll} />
      <ProgramModules
        modules={modules}
        amountOfWeeklyModules={amountOfWeeklyModules}
      />
      <div
        className={styles.img}
        style={{ backgroundImage: 'url(' + { url } + ')' }}
      />
      <ProgramResults results={results} />
      <Mentors />
      <ProgramLearningApproach learningApproach={pageData.learningApproach} />
      <ProgramMaterials additionalMaterials={additionalMaterials} />
      <Impact />
      <div className={styles.hr} />
      <ProgramEnrollNow enrollInfo={pageData.enrollInfo} />
      <ProgramQuote />
      <div className={styles.faqTitle}>Frequently Asked Questions</div>
      <FaqBlock />
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
