import * as React from 'react';
import { AboutProps } from './about.props';
import * as styles from './about.scss';
import { useAboutData } from './about.hook';

/**
 * Renders About
 */
const About: React.FC<AboutProps> = ({}) => {
  const { data } = useAboutData();

  return (
    <section className={styles.about}>
      <div className={styles.title}>
        <div>Online Learning</div>
        <div>What’s unique about Cordie?</div>
        <div>We have the critical factors to deliver real results.</div>
      </div>
      <div className={styles.content}>
        {data.map((item, index) => (
          <div key={index} className={styles.item}>
            <div>{index+1}.0</div>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { About };
