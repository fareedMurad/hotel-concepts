import { Button, Slider } from '@core/components';
import { Title } from '@pages/marketplace-product/components';
import * as React from 'react';
import { AuthorsProps } from './authors.props';
import * as styles from './authors.scss';

/**
 * Responsive slider breakpoint
 */
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  }
};

/**
 * Renders Authors
 */
const Authors: React.FC<AuthorsProps> = ({ data }) => {
  const { authors } = data || {};

  return (
    <div className={styles.authors}>
      <Title className={styles.title}>Authors</Title>
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
      <Button className={styles.seeAll} arrow>
        See All Contributors
      </Button>
    </div>
  );
};

export { Authors };
