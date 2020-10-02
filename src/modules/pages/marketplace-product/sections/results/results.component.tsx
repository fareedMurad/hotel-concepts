import { Icon } from '@core/components';
import { Title } from '@pages/marketplace-product/components';
import * as React from 'react';
import { ResultsProps } from './results.props';
import * as styles from './results.scss';

/**
 * Renders Results
 */
const Results: React.FC<ResultsProps> = ({ data }) => {
  const { results } = data || {};

  return (
    <div className={styles.results}>
      <Title>Results</Title>
      <div className={styles.list}>
        {results?.map((result, index) => (
          <div className={styles.result} key={index}>
            <Icon className={styles.resultCheck} name='mark-check' />
            <div className={styles.resultCaption}>{result}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Results };
