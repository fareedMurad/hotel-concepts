import * as React from 'react';
import { InsightsProps } from './insights.props';
import * as styles from './insights.scss';
import { HeroBlock } from './sections/hero-block';
import { FeaturedArticles } from './sections/featured-articles';
import { Footer, Spinner } from '@core/components';
import { InsightsSubscribe } from './sections';
import { useDispatch } from 'react-redux';
import { isBackgroundWhite } from '@core/components/header/store';

/**
 * Renders Insights
 */
const Insights: React.FC<InsightsProps> = ({}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(isBackgroundWhite(true));
    return () => {
      dispatch(isBackgroundWhite(false));
    };
  }, []);

  return (
    <React.Suspense fallback={<Spinner />}>
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
