import { Button, Slider } from '@core/components';
import { Title } from '@pages/marketplace-product/components';
import { navigate } from '@router/store';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { AuthorsProps } from './authors.props';
import * as styles from './authors.scss';

/**
 * Responsive slider breakpoint
 */
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 601 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

/**
 * Renders Authors
 */
const Authors: React.FC<AuthorsProps> = ({ data }) => {
  const { authors } = data || {};
  const dispatch = useDispatch();
  return (
    <div className={styles.authors} id='authors'>
      <div className={styles.titleWrapper}>
        <Title className={styles.title}>Authors</Title>
      </div>

      <Slider
        className={styles.slider}
        controls
        controlsTheme='secondary'
        controlsClassname={styles.controls}
        controlClassname={styles.control}
        responsive={responsive}
      >
        {authors?.map(
          ({
            id,
            name,
            surname,
            position,
            workAt,
            mentorPicture,
            shortDescription
          }) => (
            <div className={styles.author} key={id}>
              <div className={styles.info}>
                <div className={styles.work}>
                  {workAt}, {position}
                </div>
                <div className={styles.name}>
                  {name} {surname}
                </div>
                <div className={styles.description}>{shortDescription}</div>
              </div>
              <img
                className={styles.image}
                src={mentorPicture?.file?.url}
                alt={mentorPicture?.file?.url}
              />
            </div>
          )
        )}
      </Slider>
      <Button
        className={styles.seeAll}
        arrow
        onClick={() => dispatch(navigate('/contributors'))}
      >
        See All Contributors
      </Button>
    </div>
  );
};

export { Authors };
