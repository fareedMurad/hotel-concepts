import * as React from 'react';
import { SocialsProps } from './socials.props';
import * as styles from './socials.scss';
import { useSocialsData } from './socials.hook';
import { useTranslation } from 'react-i18next';

/**
 * Renders Socials
 */
const Socials: React.FC<SocialsProps> = ({}) => {
  const { data } = useSocialsData();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <section className={styles.socials}>
        <div className={styles.leftSide} />
        <div className={styles.rightSide}>
          <div className={styles.title}>
            <div>{t('home.socials.title')}</div>
            <div />
            <div>{t('home.socials.description')}</div>
          </div>
          <div className={styles.links}>
            {data.map((social, index) => (
              <a key={index} href={social.url} className={styles.link}>
                <img src={require(`img/socials/${social.img}.svg`)} alt='' />
                <div>{social.name}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className={styles.hrWrapper}>
        <div className={styles.hr} />
      </div>
    </React.Fragment>
  );
};

export { Socials };
