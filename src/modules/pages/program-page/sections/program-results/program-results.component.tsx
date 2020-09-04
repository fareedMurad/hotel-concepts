import * as React from 'react';
import { ProgramResultsProps } from './program-results.props';
import * as styles from './program-results.scss';
import { gql, useQuery } from '@apollo/client';
import { Spinner } from '@core/components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';

const GET_RESULTS = gql`
  query($id: String!, $locale: String!) {
    onlineCourse(id: $id, locale: $locale) {
      results
    }
  }
`;
/**
 * Renders ProgramResults
 */
const ProgramResults: React.FC<ProgramResultsProps> = ({ programId }) => {
  const { t } = useTranslation();
  const { language } = useSelector((state: State) => state.localization);
  const { data, loading, error } = useQuery(GET_RESULTS, {
    variables: { id: programId, locale: language }
  });
  if (loading) return <Spinner />;

  const results = data?.onlineCourse?.results;
  return (
    <section id='results' className={styles.programResults}>
      <div className={styles.title}>{t('program-page.results')}</div>
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
