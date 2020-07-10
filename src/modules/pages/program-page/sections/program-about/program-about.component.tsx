import * as React from 'react';
import { ProgramAboutProps } from './program-about.props';
import * as styles from './program-about.scss';

/**
 * Renders ProgramAbout
 */
const ProgramAbout: React.FC<ProgramAboutProps> = ({}) => {
  const data = ["Digital marketing", "Branding Strategy", "Creative thinking", "Creative thinking"];
  return (
    <section className={styles.programAbout}>
      <div className={styles.title}>
        <div>About</div>
        <div>
          Digital marketing has emerged as the pillar
          of many businesses’ promotion and branding strategy.
          In this program, you will gain general knowledge about
          the principles of digital marketing and acquire the
          skills, analytical techniques and approaches to apply
          digitalst rategies effectively for customer acquisition,
          engagement and retention.
        </div>
      </div>
      <div className={styles.skills}>
        <div>Skills covered</div>
        {data.map(item => (
          <div className={styles.item} key={item}>{item}</div>
        ))}
      </div>
    </section>
  );
};

export { ProgramAbout };
