import { Button } from '@core/components';
import * as React from 'react';
import { SliderItemProps } from './slider-item.props';
import * as styles from './slider-item.scss';

/**
 * Renders SliderItem
 */
const SliderItem: React.FC<any> = ({ item }) => {
  return (
    <div className={styles.sliderItem}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${item.image.url})` }}
      />
      <div className={styles.info}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.description}>{item.description}</div>
        <Button className={styles.button} theme='secondary'>
          Show more{' '}
        </Button>
      </div>
    </div>
  );
};

export { SliderItem };
