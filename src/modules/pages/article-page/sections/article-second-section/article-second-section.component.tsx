import * as React from 'react';
import { ArticleSecondSectionProps } from './article-second-section.props';
import * as styles from './article-second-section.scss';
import { useMediaPoints } from '@core/shared';
import { InsightsForm } from '@pages/article-page/components';

/**
 * Renders ArticleSecondSection
 */
const ArticleSecondSection: React.FC<ArticleSecondSectionProps> = ({}) => {
  const { desktop } = useMediaPoints();

  return (
    <div className={styles.articleSecondSection}>
      <div className={styles.hr} />

      {desktop && <InsightsForm />}
    </div>
  );
};

export { ArticleSecondSection };
