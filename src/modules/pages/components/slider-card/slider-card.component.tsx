import * as React from 'react';
import { SliderCardProps } from './slider-card.props';
import * as styles from './slider-card.scss';
import { H3, H4 } from '@core/components';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

/**
 * Renders SliderCard
 */
const SliderCard: React.FC<SliderCardProps> = ({
  img,
  name,
  author,
  price,
  id,
  categorySlug,
  onClick,
  className
}) => {
  return (
    <div className={classNames(styles.sliderCard, className)}>
      <NavLink to={`/category/${categorySlug}/product/${id}`}>
        <div className={styles.imgWrap}>
          <img className={styles.cardGoodsPic} src={img[0].url} alt='goods' />
        </div>

        <div className={styles.description}>
          <div className={styles.wrap}>
            <H4 className={styles.price}>{`
            $${price}`}</H4>
            {author && <div className={styles.author}>{author}</div>}
          </div>

          <H3 className={styles.name}>{name}</H3>
        </div>
      </NavLink>
    </div>
  );
};

export { SliderCard };
