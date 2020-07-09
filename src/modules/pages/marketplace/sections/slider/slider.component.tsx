import * as React from 'react';
import { SliderProps } from './slider.props';
import * as styles from './slider.scss';
import { H1, Paragraph, Button } from '@core/components';
import { SliderCard } from './slider-card';
import { useMarketplaceData } from '@pages/marketplace/marketplace.hook';

/**
 * Renders Slider
 */
const Slider: React.FC<SliderProps> = ({ subtitle, title, data }) => {
  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        <Paragraph className={styles.subtitleOrange}>{subtitle}</Paragraph>
        <H1>{title}</H1>
      </div>
      <div className={styles.cardsRow}>
        {data.map(el => {
          const { img, name, price, id, author } = el;
          return (
            <SliderCard
              key={id}
              img={img}
              name={name}
              price={price}
              author={author}
            />
          );
        })}
      </div>
      <div className={styles.sliderNav}>
        <Button className={styles.sliderNavArrow}>&#8592;</Button>
        <Button className={styles.sliderNavArrow}>&#8594;</Button>
      </div>
    </div>
  );
};

export { Slider };
