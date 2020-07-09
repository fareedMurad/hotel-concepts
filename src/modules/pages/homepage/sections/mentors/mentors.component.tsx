import * as React from 'react';
import { MentorsProps } from './mentors.props';
import * as styles from './mentors.scss';
import { Slider } from '@core/components/slider';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { useMentorsData } from './mentors.hook';
import { MentorItem } from '@pages/homepage/components/mentor-item';

const responsiveBreakpoints = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1290 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1290, min: 1000 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1000, min: 700 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 699, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

/**
 * Renders Mentors
 */
const Mentors: React.FC<MentorsProps> = ({}) => {
  const { data } = useMentorsData();

  return (
    <section className={styles.mentors}>
      <div className={styles.title}>
        <div>Meet mentors & Coauthors</div>
        <div />
        <div>
          World-class faculty introduce you to the
          very latest in hospitality business knowledge
          and provide you with the tools and skills to overcome
          challenges and find solutions.
        </div>
      </div>
      <Slider
          containerClass={styles.slider}
          draggable={false}
          swipeable={false}
          responsive={responsiveBreakpoints}
          customButtonGroup={
            <SliderButtons className={styles.controls} isBordered={true} btnText="See All Contributors" />
          }
        >
        {data.map((coauthor, index) => (
          <MentorItem
            name={coauthor.name}
            role={coauthor.role}
            img={coauthor.img}
            key={`${coauthor.name}+${index}`}
          />
        ))}
      </Slider>
    </section>
  );
};

export { Mentors };
