import { useQuery } from '@apollo/client';
import { fetchMarketplaceByCategory } from '@app/redux/marketplace';
import { State } from '@app/redux/state';
import { Slider, Spinner } from '@core/components';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { gql } from 'apollo-boost';
import classNames from 'classnames';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { HeroProps } from './hero.props';
import * as styles from './hero.scss';
import { SliderControls } from './slider-controls';
import { SliderItem } from './slider-item';

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

//temporary query data for slider

const SLIDERDATA = gql`
  {
    marketplaceBackgroundCarouselCollection {
      items {
        title
        description
        image {
          url
        }
        mobileImage {
          url
        }
      }
    }
  }
`;
/**
 * Renders Hero
 */
const Hero: React.FC<HeroProps> = ({ className, categories, slider }) => {
  const { data, loading, error } = useQuery(SLIDERDATA);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const {
    marketplace: { selectedCategory },
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);

  const oldSafari = browserName === 'Safari' && browserVersion < '14';

  if (loading) return <Spinner />;
  const response = data?.marketplaceBackgroundCarouselCollection?.items;

  return (
    <div className={styles.hero}>
      <Slider
        className={styles.slider}
        responsive={responsive}
        itemClass={styles.slide}
        customButtonGroup={<SliderControls />}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        transitionDuration={1000}
      >
        {response?.map((item, index) => (
          <SliderItem item={item} key={index} isOldSafari={oldSafari} />
        ))}
      </Slider>
      <div className={styles.overlay}>
        <div className={styles.categories}>
          {categories
            .filter((el, idx) => idx < 5)
            .map(({ category: { category, id }, total }) => {
              const match = selectedCategory?.id == id;
              const isNotEmpty = total > 0;

              return (
                isNotEmpty && (
                  <div
                    className={classNames(styles.category, {
                      [styles.categorySelected]: match
                    })}
                    onClick={() => {
                      scrollTo(id);
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
