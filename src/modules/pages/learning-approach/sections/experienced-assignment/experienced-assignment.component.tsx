import * as React from 'react';
import { ExperiencedAssignmentProps } from './experienced-assignment.props';
import * as styles from './experienced-assignment.scss';
import { useExperiencesAssignmentData } from './experiences-assignment.hook';
import { Icon } from '@core/components';

/**
 * Renders ExperiencedAssignment
 */
const ExperiencedAssignment: React.FC<ExperiencedAssignmentProps> = ({}) => {
  const { data } = useExperiencesAssignmentData();
  const [currentSection, setCurrentSection] = React.useState(0);
  const [section, setSection] = React.useState({
    title: '',
    list: []
  });

  React.useEffect(() => {
    if (data) {
      setSection(data[currentSection]);
    }
  }, [currentSection]);
  return (
    <div className={styles.experiencedAssignment}>
      <main className={styles.container}>
        <div className={styles.slider}>
          <div className={styles.sliderTitle}>{section.title}</div>
          <div className={styles.sliderList}>
            {section.list.map((data, index) => {
              const { id, caption } = data;
              return (
                <div key={index} className={styles.sliderListItem}>
                  {caption}
                </div>
              );
            })}
          </div>
          <div className={styles.sliderButtons}>
            {data.map((item, index) => {
              const activeSlider = index === currentSection;
              return (
                <Icon
                  name={activeSlider ? 'ellipse-active' : 'ellipse-default'}
                  onClick={() => setCurrentSection(index)}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
        <div
          className={styles.image}
          style={{
            backgroundImage: `url(${require('img/learning-approach/ear-1.png')})`
          }}
        />
      </main>
    </div>
  );
};

export { ExperiencedAssignment };
