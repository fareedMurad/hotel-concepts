import * as React from 'react';
import { WhyCordieProps } from './why-cordie.props';
import * as styles from './why-cordie.scss';
import { Icon, H2, H3, Paragraph } from '@core/components';
import { useTranslation } from 'react-i18next';
/**
 * Renders WhyCordie
 */
const WhyCordie: React.FC<WhyCordieProps> = ({}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.whyCordie}>
      <Icon name='abstract-1' />
      <H2>{t('for-companies.why-cordie.title')}</H2>

      <div className={styles.wrapper}>
        <div className={styles.block}>
          <H3 className={styles.caption}>
            {t('for-companies.why-cordie.block1.title')}
          </H3>
          <Paragraph className={styles.paragraph}>
            {t('for-companies.why-cordie.block1.text')}
          </Paragraph>
        </div>
        <div className={styles.block}>
          <H2 className={styles.caption}>
            {' '}
            {t('for-companies.why-cordie.block2.title')}
          </H2>
          <Paragraph className={styles.paragraph}>
            {t('for-companies.why-cordie.block2.text')}
          </Paragraph>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <H2 className={styles.caption}>
            {' '}
            {t('for-companies.why-cordie.block3.title')}
          </H2>
          <Paragraph className={styles.paragraph}>
            {t('for-companies.why-cordie.block3.text')}
          </Paragraph>
        </div>
        <div className={styles.block}>
          <H2 className={styles.caption}>
            {' '}
            {t('for-companies.why-cordie.block4.title')}
          </H2>
          <Paragraph className={styles.paragraph}>
            {t('for-companies.why-cordie.block4.text')}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export { WhyCordie };
