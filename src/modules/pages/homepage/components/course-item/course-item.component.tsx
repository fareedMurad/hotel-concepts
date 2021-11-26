import * as React from 'react';
import * as styles from './course-item.scss';
import { Button, Icon } from '@core/components';
import { CourseItemProps } from './course-item.props';
import Img from 'react-cool-img';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';
/**
 * Renders CourseItem
 */
const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
  const {
    name,
    price,
    weeks,
    sprints,
    slug,
    description,
    id,
    courseImage: {
      file: { url }
    }
  } = course;
  const {
    browserVersion: { name: browserName, version: browserVersion }
  } = useSelector((state: State) => state.general);
  const oldSafari = browserName === 'Safari' && browserVersion <= '14';
  const imageSrc = oldSafari
    ? `${url}?h=500&w=900`
    : `${url}?q=80&fm=webp&h=500&w=900`;

  return (
    // <div className={styles.courseItem}>
    //   <div className={styles.card}>
    //     <div className={styles.header}>
    //       {/* <img src={url} alt='' /> */}
    //       <Img
    //         src={imageSrc}
    //         alt='Online course'
    //         placeholder={require('img/placeholder')}
    //       />
    //       <div className={styles.name}>{name}</div>
    //     </div>
    //     <div className={styles.descriptionBlock}>
    //       <div className={styles.description}>{description}</div>
    //       <div className={styles.bottom}>
    //         <div className={styles.info}>
    //           <div>{price}$</div>
    //           <div>
    //             {weeks} weeks / {sprints} sprints
    //           </div>
    //         </div>
    //         <Button
    //           // #non-clickable
    //           // onClick={handleClick(id, slug)}
    //           className={styles.button}
    //           children='Explore Program'
    //           width='100%'
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className={styles.courseItem}>
      <img className={styles.courseImg} src={imageSrc} alt='' />
      <div className={styles.content}>
        <div className={styles.tags}>
          <span>New</span> <span>Early Booking Rate</span>
        </div>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.buttonD}>
          <Button
            // #non-clickable
            // onClick={handleClick(id, slug)}
            className={styles.buttonExplore}
          >
            Explore Program <Icon name='arrows/arrow-right-white' />
          </Button>
        </div>
      </div>
      <div className={styles.detail}>
        <div className={styles.item}>
          <img src={require('img/options/video-chat.svg')} alt='' />
          <div className={styles.options}>Mentor-led</div>
        </div>
        <div className={styles.item}>
          <img src={require('img/options/schedule-flexibility.svg')} alt='' />
          <div className={styles.options}>Flexible learning</div>
        </div>
        <div className={styles.item}>
          <img src={require('img/options/route.svg')} alt='' />
          <div className={styles.options}>{sprints} Sprints</div>
        </div>
        <div className={styles.item}>
          <img
            src={require('img/options/fast-service-chronometer.svg')}
            alt=''
          />
          <div className={styles.options}>Spaces limited</div>
        </div>
      </div>
    </div>
  );
};

export { CourseItem };
