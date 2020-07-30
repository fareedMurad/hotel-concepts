import * as React from 'react';
import { JobDetailsProps } from './job-details.props';
import * as styles from './job-details.scss';
import { JobApply } from './components/job-apply';
import {
  H2,
  Paragraph,
  H5,
  H3,
  Footer,
  Spinner,
  SectionTitle,
  PreCaption
} from '@core/components';
import { Header } from '@core/components/header';
import { useHistory, useParams } from 'react-router';
import { gql, useQuery } from '@apollo/client';
import { ScrollToTop } from '@app';

/**
 * query job
 */

const GET_JOB = gql`
  query($id: String!) {
    jobs(id: $id, locale: "en-US") {
      name
      employeeType
      location
      description
    }
  }
`;
/**
 * Renders JobPage
 */

const JobDetails: React.FC<JobDetailsProps> = ({}) => {
  const history = useHistory();
  const { id: jobId } = useParams();
  const { data, loading, error } = useQuery(GET_JOB, {
    variables: { id: jobId }
  });

  if (loading) return <Spinner />;
  const { jobs: job } = data;

  return (
    <React.Fragment>
      <ScrollToTop />
      <div onClick={() => history.goBack()} className={styles.back}>
        <div>&#8592;</div>
        <div>Back</div>
      </div>
      <Header whiteBackground />
      <div className={styles.jobPage}>
        <section className={styles.sectionA}>
          <SectionTitle className={styles.title}>{job.name}</SectionTitle>
          <PreCaption className={styles.preCaption}>{job.location}</PreCaption>
          <Paragraph className={styles.sectionADescription}>
            {job.description}
          </Paragraph>
        </section>
        <section className={styles.sectionB}>
          <H3 className={styles.titleOrange}>Apply for this job</H3>
          <Paragraph className={styles.description}>
            If you would like to take this module <br /> separately from a
            program, please contact us
          </Paragraph>
        </section>
        <JobApply />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export { JobDetails };
