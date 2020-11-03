import * as React from 'react';
import { InsightsProps } from './insights.props';
import * as styles from './insights.scss';
import { HeroBlock } from './sections/hero-block';
import { FeaturedArticles } from './sections/featured-articles';
import { Footer, Spinner } from '@core/components';
import { InsightsSubscribe } from './sections';
import { ScrollToTop } from '@app';

/**
 * Renders Insights
 */
const Insights: React.FC<InsightsProps> = ({}) => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <ScrollToTop />
      <div className={styles.insights}>
        <HeroBlock />
        <FeaturedArticles />
        <InsightsSubscribe />
        {/* <Footer /> */}
      </div>
    </React.Suspense>
  );
};

export { Insights };
