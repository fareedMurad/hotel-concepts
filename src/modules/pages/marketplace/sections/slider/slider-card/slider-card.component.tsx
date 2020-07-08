import * as React from 'react';
import { SliderCardProps } from './slider-card.props';
import * as styles from './slider-card.scss';
import { H3, H4 } from '@core/components';

/**
 * Renders SliderCard
 */
const SliderCard: React.FC<SliderCardProps> = ({
  img,
  name,
  author,
  price
}) => {
  return (
    <div className={styles.sliderCard}>
      <div className={styles.imgWrap}>
        <img
          className={styles.cardGoodsPic}
          src={`${require(`img/marketplace/marketplace-${img}.png`)}`}
          alt='goods'
        />
      </div>

      <div className={styles.description}>
        <div className={styles.wrap}>
          <H4 className={styles.price}>{price}</H4>
          {author && <div className={styles.author}>{author}</div>}
        </div>

        <H3>{name}</H3>
      </div>
    </div>
  );
};

export { SliderCard };
