import * as React from 'react';
import { ImpactProps } from './impact.props';
import * as styles from './impact.scss';
import { useImpactData } from './impact.hook';
import { Slider } from '@core/components/slider';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { OpinionItem } from '@pages/homepage/components/opinion-item';
import { gql, useQuery } from '@apollo/client';
import { Spinner } from '@core/components/spinner';
import { PreCaption, SectionTitle } from '@core/components';

const responsiveBreakpoints = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

/**
 * testimonials query
 */

/**
 * Renders Impact
 */
const Impact: React.FC<ImpactProps> = ({ testimonials, loading }) => {
  // const { data, loading } = useQuery(GET_TESTEMONIALS);
  // const [testemonials, setTestemonials] = React.useState([]);

  // React.useEffect(() => {
  //   if (!loading) {
  //     const { items } = data.testimonialsCollection;
  //     setTestemonials(items);
  //   }
  // });

  if (loading) return <Spinner />;

  return (
    <section className={styles.impact}>
      <div className={styles.title}>
        <PreCaption className={styles.preCaption}>Opinions</PreCaption>
        <SectionTitle>Cordie Impact</SectionTitle>
      </div>
      <Slider
        containerClass={styles.slider}
        draggable={false}
        swipeable={false}
        responsive={responsiveBreakpoints}
        customButtonGroup={<SliderButtons className={styles.controls} />}
      >
        {testimonials.map((item, index) => {
          const { name, text, companyName, photo } = item;

          return (
            <OpinionItem
              name={name}
              text={text}
              img={photo.url}
              from={companyName}
              key={`${item.name}+${index}`}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export { Impact };
