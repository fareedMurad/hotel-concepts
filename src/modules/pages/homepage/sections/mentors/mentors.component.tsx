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
import { gql, useQuery } from '@apollo/client';

const responsiveBreakpoints = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1290 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1290, min: 1000 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1000, min: 700 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 699, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

/**
 * mentors query
 */

const GET_MENTORS = gql`
  {
    mentorCollection {
      items {
        name
        position
        slug
        experience
        mentorPicture {
          url
        }
      }
    }
  }
`;

/**
 * Renders Mentors
 */
const Mentors: React.FC<MentorsProps> = ({}) => {
  const { data, loading, error } = useQuery(GET_MENTORS);
  const [currentMentor, setCurrentMentor] = React.useState(null);
  // const [mentors, setMentors] = React.useState([]);
  React.useEffect(() => {
    if (!loading) return;
  }, [loading]);
  const history = useHistory();

  if (loading) return <div>loading...</div>;

  const { items: contributors } = data.mentorCollection;

  const handleClick = () => history.push(`/contributors`);

  const modalHandle = slug => () => {
    setCurrentMentor(contributors.filter(e => e.slug == slug)[0]);
  };

  return (
    <section className={styles.mentors}>
      <div className={styles.title}>
        <div>Meet mentors & Coauthors</div>
        <div />
        <div>
          World-class faculty introduce you to the very latest in hospitality
          business knowledge and provide you with the tools and skills to
          overcome challenges and find solutions.
        </div>
      </div>
      <Slider
        containerClass={styles.slider}
        draggable={false}
        swipeable={false}
        responsive={responsiveBreakpoints}
        customButtonGroup={
          <SliderButtons
            onClick={handleClick}
            className={styles.controls}
            isBordered={true}
            btnText='See All Contributors'
          />
        }
      >
        {contributors.map(coauthor => {
          const { name, position, slug, mentorPicture } = coauthor;
          return (
            <MentorItem
              name={name}
              role={position}
              img={mentorPicture.url}
              key={slug}
              onClick={modalHandle(slug)}
            />
          );
        })}
      </Slider>
      {currentMentor && (
        <MentorModal
          name={currentMentor.name}
          photo={currentMentor.mentorPicture}
          city={currentMentor.city}
          profession={currentMentor.position}
          experience={currentMentor.experience.text}
        />
      )}
    </section>
  );
};

export { Mentors };
