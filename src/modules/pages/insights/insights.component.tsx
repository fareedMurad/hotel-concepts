import * as React from 'react';
import { InsightsProps } from './insights.props';
import * as styles from './insights.scss';
import { Header } from '@core/components/header';

/**
 * Renders Insights
 */
const Insights: React.FC<InsightsProps> = ({}) => {
  return (
    <div className={styles.insights}>
      <div className={styles.header}>
        <Header whiteBackground />
      </div>
    </div>
  );
};

export { Insights };
