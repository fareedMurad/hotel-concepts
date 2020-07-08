import * as React from 'react';
import { InsightsProps } from './insights.props';
import * as styles from './insights.scss';
import { Header } from '@core/components/header';
import { HeroBlock } from './sections/hero-block';
import { FeaturedArticles } from './sections/featured-articles';
import { Footer } from '@core/components';
import { InsightsSubscribe } from './sections';

/**
 * Renders Insights
 */
const Insights: React.FC<InsightsProps> = ({}) => {
  return (
    <div className={styles.insights}>
      <div className={styles.header}>
        <Header whiteBackground />
      </div>
      <HeroBlock />
      <FeaturedArticles />
      <InsightsSubscribe />
      <Footer />
    </div>
  );
};

export { Insights };
