import * as React from 'react';
import { SocialsProps } from './socials.props';
import * as styles from './socials.scss';
import { useSocialsData } from './socials.hook';

/**
 * Renders Socials
 */
const Socials: React.FC<SocialsProps> = ({}) => {
  const { data } = useSocialsData();
  return (
    <section className={styles.socials}>
      <div className={styles.leftSide}></div>
      <div className={styles.rightSide}>
        <div className={styles.title}>
          <div>Join our social media.</div>
          <div/>
          <div>
            Be the firs to read useful articles and get
            information about latest promotions!
          </div>
        </div>
        <div className={styles.links}>
          {data.map((social, index) => (
            <a key={index} href={social.url} className={styles.link}>
              <img src={require(`img/socials/${social.img}.png`)} alt=""/>
              <div>{social.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Socials };
