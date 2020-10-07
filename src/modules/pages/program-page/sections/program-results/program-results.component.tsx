import { State } from '@app/redux/state';
import { Icon } from '@core/components';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ProgramResultsProps } from './program-results.props';
import * as styles from './program-results.scss';

/**
 * Renders ProgramResults
 */
const ProgramResults: React.FC<ProgramResultsProps> = ({ data }) => {
  const { t } = useTranslation();
  const { language } = useSelector((state: State) => state.localization);
  const { results } = data || {};

  return (
    <section id='results' className={styles.programResults}>
      <div className={styles.title}>{t('program-page.results')}</div>
      <div className={styles.list}>
        {results?.map((result, index) => (
          <div className={styles.result} key={index}>
            <Icon className={styles.resultCheck} name='mark-check' />
            <div className={styles.resultCaption}>{result}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { ProgramResults };
