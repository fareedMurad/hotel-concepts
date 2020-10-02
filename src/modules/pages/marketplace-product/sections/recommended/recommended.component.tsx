import { Slider } from '@core/components';
import { Title } from '@pages/marketplace-product/components';
import * as React from 'react';
import { RecommendedProps } from './recommended.props';
import * as styles from './recommended.scss';

/**
 * Responsive slider breakpoints
 */
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  }
};

const recommended = [
  {
    url:
      '//images.ctfassets.net/qgx3dmmccd7u/6xalmkUoAdbqZx10D23Gil/5a1bd90daccdfd29f53f92f075eef3cb/Screen_Shot_2020-09-09_at_12.22.06_PM.png',
    price: 34.9,
    name: 'Business Analytics'
  },
  {
    url:
      '//images.ctfassets.net/qgx3dmmccd7u/6xalmkUoAdbqZx10D23Gil/5a1bd90daccdfd29f53f92f075eef3cb/Screen_Shot_2020-09-09_at_12.22.06_PM.png',
    price: 34.9,
    name: 'Business Analytics'
  },
  {
    url:
      '//images.ctfassets.net/qgx3dmmccd7u/6xalmkUoAdbqZx10D23Gil/5a1bd90daccdfd29f53f92f075eef3cb/Screen_Shot_2020-09-09_at_12.22.06_PM.png',
    price: 34.9,
    name: 'Business Analytics'
  }
];

/**
 * Renders Recommended
 */
const Recommended: React.FC<RecommendedProps> = ({}) => {
  const {} = {};

  return (
    <div className={styles.recommended}>
      <Title className={styles.title}>Recommended books</Title>
      <Slider
        className={styles.slider}
        itemClass={styles.sliderItem}
        controls
        controlsTheme='secondary'
        controlClassname={styles.control}
        responsive={responsive}
      >
        {recommended.map(({ url, price, name }, index) => (
          <div className={styles.book} key={index}>
            <img className={styles.image} src={url} alt={url} />
            <div className={styles.divider} />
            <div className={styles.price}>${price}</div>
            <div className={styles.name}>{name}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export { Recommended };
