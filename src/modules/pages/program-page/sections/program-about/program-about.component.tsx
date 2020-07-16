import * as React from 'react';
import { ProgramAboutProps } from './program-about.props';
import * as styles from './program-about.scss';

/**
 * Renders ProgramAbout
 */
const ProgramAbout: React.FC<ProgramAboutProps> = ({ about }) => {
  const { aboutText, skills } = about;
  return (
    <section id="about" className={styles.programAbout}>
      <div className={styles.title}>
        <div>About</div>
        <div>{aboutText}</div>
      </div>
      <div className={styles.skillsWrapper}>
        <div className={styles.skills}>
          <div>Skills covered</div>
          {skills.map((item, index) => (
            <div className={styles.item} key={index}>{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProgramAbout };
