import * as React from 'react';
import { PrivacyPolicyProps } from './privacy-policy.props';
import * as styles from './privacy-policy.scss';
import { H2, Paragraph, Footer } from '@core/components';
import { usePrivacyPolicyData } from './privacy-policy.hook';
import { useDispatch } from 'react-redux';
import { isBackgroundWhite } from '@core/components/header/store';
import { useTranslation } from 'react-i18next';
/**
 * Renders Block
 */
const Block: React.FC<{
  id: string;
  title: string;
  description?: string;
}> = ({ id, title, description }) => {
  return (
    <div className={styles.block}>
      <div className={styles.blockId}>{id}</div>
      <div className={styles.blockTitle}>{title}</div>
      <Paragraph className={styles.blockDescription} sm>
        {description}
      </Paragraph>
    </div>
  );
};
/**
 * Renders PrivacyPolicy
 */
const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { list } = usePrivacyPolicyData();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(isBackgroundWhite(true));
    return () => {
      dispatch(isBackgroundWhite(false));
    };
  }, []);

  return (
    <div className={styles.privacyPolicy}>
      <header className={styles.header}></header>
      <main className={styles.container}>
        <H2 className={styles.title}>{t('privacy-policy.title')}</H2>
        <Block
          id='1.0'
          title={t('privacy-policy.block1.title')}
          description={t('privacy-policy.block1.description')}
        />
        <div className={styles.block}>
          <div className={styles.blockId}>2.0</div>
          <div className={styles.blockTitle}>
            {t('privacy-policy.block2.title')}
          </div>
          <Paragraph sm>{t('privacy-policy.block2.paragraph1')}</Paragraph>
          <Paragraph sm>{t('privacy-policy.block2.paragraph2')}</Paragraph>
          <Paragraph sm>{t('privacy-policy.block2.paragraph3')}</Paragraph>
          <Paragraph sm>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </Paragraph>
          <Paragraph sm>{t('privacy-policy.block2.paragraph4')}</Paragraph>
          <Paragraph sm>{t('privacy-policy.block2.paragraph5')}</Paragraph>
          <Paragraph sm>{t('privacy-policy.block2.paragraph6')}</Paragraph>
          <Block id='3.0' title={t('privacy-policy.block3.title')} />
          <Paragraph sm>{t('privacy-policy.block3.paragraph1')}</Paragraph>
          <Paragraph sm>{t('privacy-policy.block3.paragraph2')}</Paragraph>
          <Block id='4.0' title={t('privacy-policy.block4.title')} />
          <Paragraph sm>{t('privacy-policy.block4.paragraph1')}</Paragraph>
          <Paragraph sm>{t('privacy-policy.block4.paragraph2')}</Paragraph>
          <Block
            id='5.0'
            title={t('privacy-policy.block5.title')}
            description={t('privacy-policy.block5.description')}
          />
          <Block
            id='6.0'
            title={t('privacy-policy.block6.title')}
            description={t('privacy-policy.block6.description')}
          />
          <Block
            id='7.0'
            title={t('privacy-policy.block7.title')}
            description={t('privacy-policy.block7.description')}
          />
          <Block
            id='8.0'
            title={t('privacy-policy.block8.title')}
            description={t('privacy-policy.block8.description')}
          />
          <Block
            id='9.0'
            title={t('privacy-policy.block9.title')}
            description={t('privacy-policy.block9.description')}
          />
          <Block
            id='10.0'
            title={t('privacy-policy.block10.title')}
            description={t('privacy-policy.block10.description')}
          />
          <Block id='11.0' title={t('privacy-policy.block11.title')} />
          <Paragraph sm>{t('privacy-policy.block11.paragraph1')}</Paragraph>
          <Paragraph sm>{t('privacy-policy.block11.paragraph2')}</Paragraph>
          <Paragraph sm>{t('privacy-policy.block11.paragraph3')}</Paragraph>
          <Block
            id='12.0'
            title={t('privacy-policy.block12.title')}
            description={t('privacy-policy.block12.description')}
          />
          <Block
            id='13.0'
            title={t('privacy-policy.block13.title')}
            description={t('privacy-policy.block13.description')}
          />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export { PrivacyPolicy };
