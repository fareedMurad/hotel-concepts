import * as React from 'react';
import { ExperiencedAssignmentProps } from './experienced-assignment.props';
import * as styles from './experienced-assignment.scss';
import { useExperiencesAssignmentData } from './experiences-assignment.hook';
import { Icon } from '@core/components';
import { animated, useSpring, useTransition } from 'react-spring';

/**
 * Renders ExperiencedAssignment
 */
const ExperiencedAssignment: React.FC<ExperiencedAssignmentProps> = ({}) => {
  const { data } = useExperiencesAssignmentData();
  const [section, setSection] = React.useState(data[0]);

  console.log(section);

  const transition = useTransition(section, item => item.id, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 }
  });

  return (
    <div className={styles.experiencedAssignment}>
      <main className={styles.container}>
        <div className={styles.slider}>
          {transition.map(({ item, key, props }) => {
            return (
              <animated.div
                className={styles.sliderItem}
                key={item.id + item.image}
                style={props}
              >
                <div className={styles.leftblock}>
                  <div className={styles.sliderTitle}>{section.title}</div>
                  <div className={styles.sliderList}>
                    {item.list.map(el => {
                      return <div key={item.id}>{el.caption}</div>;
                    })}
                  </div>
                </div>
                <div>
                  {' '}
                  <img
                    className={styles.sliderImage}
                    src={require(`img/learning-approach/slider/${item.image}.png`)}
                    alt=''
                  />
                </div>
              </animated.div>
            );
          })}
        </div>
        <div className={styles.sliderButtons}>
          {data.map((item, index) => {
            const activeSlider = item.id === section.id;
            return (
              <Icon
                name={activeSlider ? 'ellipse-active' : 'ellipse-default'}
                onClick={() => setSection(data[index])}
                key={item.title}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export { ExperiencedAssignment };
