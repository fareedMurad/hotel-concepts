import * as React from 'react';
import { SliderProps } from './products-slider.props';
import * as styles from './products-slider.scss';
import { H1, Paragraph, Button } from '@core/components';
import { SliderCard } from '../slider-card';
import { useMarketplaceData } from '@pages/marketplace/marketplace.hook';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { Slider } from '@core/components/slider';

/**
 * Renders Slider
 */
const ProductsSlider: React.FC<SliderProps> = ({ subtitle, title, data }) => {
  return (
    <div className={styles.slider}>
      <Slider
        containerClass={styles.slider}
        draggable={false}
        swipeable={false}
        customButtonGroup={<SliderButtons className={styles.controls} />}
      >
        {data.map(el => {
          const { img, name, price, id } = el;
          return (
            <SliderCard
              key={id}
              img={img}
              name={name}
              price={price}
              id={id}
              onClick={() => {}}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export { ProductsSlider };
