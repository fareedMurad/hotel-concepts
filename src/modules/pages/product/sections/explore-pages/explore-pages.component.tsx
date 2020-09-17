import * as React from 'react';
import { ExplorePagesProps } from './explore-pages.props';
import * as styles from './explore-pages.scss';
import { H2, Icon } from '@core/components';
import Carousel from 'react-multi-carousel';
import { Slider } from '@core/components/slider';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { showModal, toggleBookOverviewModal } from '@ui/modal';
import { Modals } from '@ui/models';
import { url } from 'inspector';
import { useHistory } from 'react-router';

/**
 * Renders ExplorePages
 */
const ExplorePages: React.FC<ExplorePagesProps> = ({
  data,
  setSelectedImage
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className={styles.explorePages}>
      <H2 className={styles.explorePagesTitle}>Explore Pages</H2>
      <div className={styles.slider}>
        <Slider
          containerClass={styles.slider}
          draggable={false}
          swipeable={false}
          customButtonGroup={
            <SliderButtons className={classNames(styles.controls)} />
          }
          responsive={responsive}
        >
          {data.items.map((el, idx) => {
            const format = el.url.split('.').pop();
            return format == 'pdf' ? (
              <iframe
                style={{ border: 'none' }}
                src={el.url}
                className={styles.squer}
                height='100%'
                allowFullScreen={true}
                onClick={() => {
                  setSelectedImage(el.url);
                  dispatch(toggleBookOverviewModal(true));
                  dispatch(showModal(Modals.bookOverview));
                }}
              />
            ) : (
              <div
                key={el.url}
                className={styles.square}
                style={{
                  backgroundImage: `url(${el.url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'fill'
                }}
                onClick={() => {
                  setSelectedImage(el.url);
                  dispatch(toggleBookOverviewModal(true));
                  dispatch(showModal(Modals.bookOverview));
                }}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export { ExplorePages };
