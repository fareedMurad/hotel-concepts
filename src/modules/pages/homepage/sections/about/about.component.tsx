import * as React from 'react';
import * as styles from './about.scss';
import { Button, PreCaption, SectionTitle } from '@core/components';
import { navigate } from '@router/store';
import { useAboutData } from './about.hook';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

/**
 * Renders About
 */
const About: React.FC = () => {
  const { data } = useAboutData();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <section className={styles.about}>
      <div className={styles.title}>
        <PreCaption>Achieve at every level</PreCaption>
        <SectionTitle>Who is it for?</SectionTitle>
        <div>
          We combine our customised approach to hospitality learning with
          handpicked experts and topics, designed to help busy, full-time
          hospitality professionals level up.
        </div>
        {/* <Button
          className={styles.button}
          arrow
          // #non-clickable
          // onClick={() => dispatch(navigate('/about-us'))}
        >
          {t('home.about.button-text')}
        </Button> */}
      </div>
      <div className={styles.content}>
        {data.map((item, index) => (
          <div key={index} className={styles.item}>
            <div>{index + 1}.0</div>
            <div>{item.title}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { About };
