import * as React from 'react';
import { ProgramResultsProps } from './program-results.props';
import * as styles from './program-results.scss';
import { gql, useQuery } from '@apollo/client';
import { Spinner } from '@core/components';

const GET_RESULTS = gql`
  query($id: String!) {
    onlineCourse(id: $id) {
      results
    }
  }
`;
/**
 * Renders ProgramResults
 */
const ProgramResults: React.FC<ProgramResultsProps> = ({ programId }) => {
  const { data, loading, error } = useQuery(GET_RESULTS, {
    variables: { id: programId }
  });
  if (loading) return <Spinner />;

  const results = data?.onlineCourse?.results;
  return (
    <section id='results' className={styles.programResults}>
      <div className={styles.title}>Results</div>
      <div className={styles.hr} />
      {results.map(item => (
        <div key={item}>
          <div className={styles.container}>
            <div className={styles.icon} />
            <div className={styles.result}>{item}</div>
          </div>
          <div className={styles.hr} />
        </div>
      ))}
    </section>
  );
};

export { ProgramResults };
