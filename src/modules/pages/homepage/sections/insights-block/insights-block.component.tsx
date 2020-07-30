import * as React from 'react';
import { InsightsBlockProps } from './insights-block.props';
import * as styles from './insights-block.scss';
import { Slider } from '@core/components/slider';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { InsightBlockItem } from '@pages/homepage/components/insight-block-item';
import { useHistory } from 'react-router';
import { Spinner } from '@core/components/spinner';
import { SectionTitle } from '@core/components';
import { useInsightsData } from './insights-block.hook';

const responsiveBreakpoints = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 2000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 2000, min: 1400 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1400, min: 930 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 930, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

/**
 * Renders InsightsBlock
 */
const InsightsBlock: React.FC<InsightsBlockProps> = ({}) => {
  const history = useHistory();
  const handleClick = () => history.push(`/insights`);

  const { articles, insightsDataLoading } = useInsightsData();

  if (insightsDataLoading) return <Spinner />;

  return (
    <section className={styles.insightsBlock}>
      <div className={styles.title}>
        <SectionTitle>Cordie Insights</SectionTitle>
        <div>Make the most of your learning experience</div>
      </div>
      <Slider
        containerClass={styles.slider}
        draggable={false}
        swipeable={false}
        responsive={responsiveBreakpoints}
        customButtonGroup={
          <SliderButtons
            onClick={handleClick}
            className={styles.controls}
            isBordered
            btnText='Read All Insights'
          />
        }
      >
        {articles.map(article => {
          const {
            title,
            preText,
            categoriesCollection: { items: categories },
            slug,
            date,
            articleImage,
            sys: { id }
          } = article;
          return (
            <InsightBlockItem
              title={title}
              text={preText}
              categories={categories}
              slug={slug}
              date={date}
              articleImage={articleImage}
              key={slug}
              id={id}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export { InsightsBlock };
