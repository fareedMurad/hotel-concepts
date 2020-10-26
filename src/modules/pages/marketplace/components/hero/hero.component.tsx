import { fetchMarketplaceByCategory } from '@app/redux/marketplace';
import { State } from '@app/redux/state';
import { Slider } from '@core/components';
import classNames from 'classnames';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { HeroProps } from './hero.props';
import * as styles from './hero.scss';
import { SliderControls } from './slider-controls';

/**
 * Slider responsive
 */
const responsive = {
  all: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

/**
 * Scroll into section
 */
const scrollInto = (id: string) => {
  const element = document.getElementById(id);

  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/**
 * Renders Hero
 */
const Hero: React.FC<HeroProps> = ({ className, categories, slider }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { selectedCategory } = useSelector((state: State) => state.marketplace);

  return (
    <div className={styles.hero}>
      <Slider
        className={styles.slider}
        responsive={responsive}
        itemClass={styles.slide}
        customButtonGroup={<SliderControls />}
      >
        {slider?.map(({ url }, index) => (
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${url})` }}
            key={index}
          />
        ))}
      </Slider>
      <div className={styles.overlay}>
        <div className={styles.info}>
          <div className={styles.title}>{t('marketplace.title')}</div>
          <div className={styles.description}>
            {t('marketplace.description')}
          </div>
        </div>
        <div className={styles.categories}>
          {categories.map(({ category: { category, id }, total }) => {
            const match = selectedCategory?.id == id;
            const isNotEmpty = total > 0;

            return (
              isNotEmpty && (
                <div
                  className={classNames(styles.category, {
                    [styles.categorySelected]: match
                  })}
                  onClick={() => {
                    scrollInto(id);
                    dispatch(fetchMarketplaceByCategory(id));
                  }}
                  key={id}
                >
                  <div className={styles.categoryCaption}>{category}</div>
                  <div className={styles.categoryAmount}>({total})</div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Hero };
