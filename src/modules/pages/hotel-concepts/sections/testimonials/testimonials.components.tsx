import * as React from 'react';
import * as styles from './testimonials.scss';
import * as styles2 from '../../../marketplace/sections/kordie-difference/kordie-difference.scss';
import { useTranslation } from 'react-i18next';
import { Slider } from '@core/components';
import { TestimonialsData } from './testimonials.hook';
import classNames from 'classnames';

/**
 * Renders Testimonials
 */

const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1300 },
    items: 2,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1300, min: 601 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

// const CustomDot: React.FC<any> = ({ onClick, ...rest }) => {
//   const {
//     onMove,
//     index,
//     active,
//     carouselState: { currentSlide, deviceType },
//     items
//   } = rest;

//   const carouselItems = items.map((_, indx) => <div key={indx} />);

//   return (
//     <React.Fragment>
//       <div
//         className={classNames(
//           styles.dot,
//           active ? styles.activeDot : styles.inactiveDot
//         )}
//         onClick={() => onClick()}
//       >
//         {React.Children.toArray(carouselItems)[index]}
//       </div>
//     </React.Fragment>
//   );
// };
const Testimonials = () => {
  const { t } = useTranslation();
  const { data } = TestimonialsData();
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    count < 1 && setCount(1);
    count > data?.length && setCount(data?.length);
  }, [count]);
  return (
    <section className={styles.testimonials}>
      <div className={styles.title}>
        <h1 className={styles.sectiontitle}>
          {t('hotel-concepts.testimonials.title')}
        </h1>
      </div>
      <div className={styles.sliderWrapper}>
        <Slider
          className={styles.slider}
          responsive={responsive}
          controls
          controlsClassname={styles.sliderControls}
          controlClassname={styles.sliderControl}
        >
          {[...data, ...data].map((item, id) => (
            <div key={id} className={styles.slider1}>
              <p className={styles.testimonialsDiscription}>
                {item.description}
              </p>
              <div className={styles.content}>
                <img className={styles.img} src={item.imgSrc} alt='mvp' />
                <div className={styles.collaboration}>
                  <div className={styles.testimonialsTitle}>{item.name}</div>
                  <div className={styles.testimonialsLocation}>
                    {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export { Testimonials };
