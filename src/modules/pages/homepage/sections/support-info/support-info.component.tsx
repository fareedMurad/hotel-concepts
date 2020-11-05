import * as React from 'react';
import { SupportInfoProps } from './support-info.props';
import * as styles from './support-info.scss';
import { useSupportInfoData } from './support-info.hook';
import { SectionTitle, Hr } from '@core/components';
import { useTranslation } from 'react-i18next';

/**
 * Renders SupportInfo
 */
const SupportInfo: React.FC<SupportInfoProps> = ({}) => {
  const { data } = useSupportInfoData();
  const { t } = useTranslation();

  return (
    <section className={styles.supportInfo}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          <SectionTitle className={styles.caption}>
            {t('home.support-info.title')}
          </SectionTitle>
          <Hr className={styles.hr} />
          <div className={styles.subtitle}>
            {t('home.support-info.sub-title')}
          </div>
        </div>
      </div>
      <div className={styles.info}>
        {data.map((info, index) => (
          <div className={styles.infoItem} key={index}>
            {info}
          </div>
        ))}
      </div>
    </section>
  );
};

export { SupportInfo };
