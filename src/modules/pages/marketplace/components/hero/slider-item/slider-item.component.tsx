import { Button } from '@core/components';
import * as React from 'react';
import * as styles from './slider-item.scss';

/**
 * Renders SliderItem
 */
const SliderItem: React.FC<any> = ({ item }) => {
  return (
    <div className={styles.sliderItem}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${item.gradient.url})` }}
      />
      <div className={styles.info}>
        <div className={styles.main}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.description}>{item.description}</div>
          <Button className={styles.button} theme='secondary'>
            Shop now
          </Button>
        </div>

        <img className={styles.books} src={item.booksImage.url} alt='books' />
      </div>
    </div>
  );
};

export { SliderItem };
