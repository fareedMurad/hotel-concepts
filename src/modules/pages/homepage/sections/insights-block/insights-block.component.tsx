import * as React from 'react';
import { InsightsBlockProps } from './insights-block.props';
import * as styles from './insights-block.scss';
import { Slider } from '@core/components/slider';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { InsightBlockItem } from '@pages/homepage/components/insight-block-item';
import { useFeaturedArticlesData } from '@pages/insights/sections/featured-articles/featured-articles.hook';

const responsiveBreakpoints = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 2000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 2000, min: 1400 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1400, min: 930 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 930, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

/**
 * Renders InsightsBlock
 */
const InsightsBlock: React.FC<InsightsBlockProps> = ({}) => {
  const { data } = useFeaturedArticlesData();

  return (
    <section className={styles.insightsBlock}>
      <div className={styles.title}>
        <div>Cordie Insights</div>
        <div>Make the most of your learning experience</div>
      </div>
      <Slider
          containerClass={styles.slider}
          draggable={false}
          swipeable={false}
          responsive={responsiveBreakpoints}
          customButtonGroup={
            <SliderButtons className={styles.controls} isBordered={true} btnText="Read All Insights" />
          }
        >
        {data.map(article => (
          <InsightBlockItem articles={article} key={article.id} />
        ))}
      </Slider>
    </section>
  );
};

export { InsightsBlock };
