import * as React from 'react';
import { MentorsProps } from './mentors.props';
import * as styles from './mentors.scss';
import { Slider } from '@core/components/slider';
import { SliderButtons } from '@core/components/slider/slider-buttons';
import { MentorItem } from '@pages/homepage/components/mentor-item';
import { useHistory } from 'react-router';
import { showModal } from '@ui/modal';
import { Modals } from '@ui/models';
import { useDispatch } from 'react-redux';
import { useContributorsData } from '@pages/contributors/contributor.hook';
import { MentorModal } from '@pages/homepage/components/mentor-modal';

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
  const history = useHistory();
  const handleClick = () => history.push(`/contributors`);
  const { contributors } = useContributorsData();
  const [curretnMentor, setCurrentMentor] = React.useState(null);
  const dispatch = useDispatch();
  const modalHandle = id => () => {
    setCurrentMentor(contributors.filter(e => e.id == id)[0]);
    dispatch(showModal(Modals.contributor));
  }

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
            <SliderButtons onClick={handleClick} className={styles.controls} isBordered={true} btnText="See All Contributors" />
          }
        >
        {contributors.map(coauthor => (
          <MentorItem
            name={coauthor.name}
            role={coauthor.profession}
            img={coauthor.photo}
            key={coauthor.id}
            onClick={modalHandle(coauthor.id)}
          />
        ))}
      </Slider>
      {curretnMentor &&
        <MentorModal
          name={curretnMentor.name}
          photo={curretnMentor.photo}
          surname={curretnMentor.surname}
          city={curretnMentor.city}
          profession={curretnMentor.profession}
          experience={curretnMentor.experience}
        />}
    </section>
  );
};

export { Mentors };
