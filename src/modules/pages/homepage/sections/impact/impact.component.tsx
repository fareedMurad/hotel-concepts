import * as React from 'react';
import { ImpactProps } from './impact.props';
import * as styles from './impact.scss';
import { useImpactData } from './impact.hook';
import { Slider } from '@core/components/slider';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { OpinionItem } from '@pages/homepage/components/opinion-item';

const responsiveBreakpoints = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

/**
 * Renders Impact
 */
const Impact: React.FC<ImpactProps> = ({}) => {
  const { data } = useImpactData();

  return (
    <section className={styles.impact}>
      <div className={styles.title}>
        <div>Opinions</div>
        <div>Cordie Impact</div>
      </div>
      <Slider
        containerClass={styles.slider}
        draggable={false}
        swipeable={false}
        responsive={responsiveBreakpoints}
        customButtonGroup={
          <SliderButtons className={styles.controls} />
        }
      >
        {data.map((item, index) => (
          <OpinionItem
            name={item.name}
            text={item.text}
            img={item.img}
            from={item.from}
            key={`${item.name}+${index}`}
          />
        ))}
      </Slider>
    </section>
  );
};

export { Impact };
