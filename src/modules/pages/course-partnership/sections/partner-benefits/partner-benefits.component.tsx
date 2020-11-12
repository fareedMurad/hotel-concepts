import * as React from 'react';
import * as styles from './partner-benefits.scss';
import { Paragraph, Icon, SectionTitle } from '@core/components';
import { gql, useQuery } from '@apollo/client';
import { PartnerBenefitsProps } from './partner-benefits.props';
import { useMediaPoints } from '@core/shared';
import { useTranslation } from 'react-i18next';

const GET_HERO_IMAGE = gql`
  {
    asset(id: "xTtGe8ZnCwtdPyit9P2VZ") {
      url
    }
  }
`;

/**
 * Renders PartnerBenefits
 */
const PartnerBenefits: React.FC<PartnerBenefitsProps> = ({}) => {
  const { desktop } = useMediaPoints();
  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  const { t } = useTranslation();

  return (
    <div className={styles.partnerBenefits}>
      <div className={styles.content}>
        <SectionTitle className={styles.sectionTitle}>
          {t('course-partnership.partner-benefits.title')}
        </SectionTitle>
        <Paragraph className={styles.paragraph}>
          {t('course-partnership.partner-benefits.description')}
        </Paragraph>
        <div className={styles.contentList}>
          <div className={styles.contentListItem}>
            <Icon className={styles.contentListIcon} name='list-dot' />
            <div className={styles.contentListTitle}>
              {t('course-partnership.partner-benefits.list.item1')}
            </div>
          </div>
          <div className={styles.contentListItem}>
            <Icon className={styles.contentListIcon} name='list-dot' />
            <div className={styles.contentListTitle}>
              {t('course-partnership.partner-benefits.list.item2')}
            </div>
          </div>
          <div className={styles.contentListItem}>
            <Icon className={styles.contentListIcon} name='list-dot' />
            <div className={styles.contentListTitle}>
              {' '}
              {t('course-partnership.partner-benefits.list.item3')}
            </div>
          </div>
        </div>
        <div className={styles.hr} />
        <Paragraph className={styles.fz}>
          {t('course-partnership.partner-benefits.paragraph1')}
        </Paragraph>
      </div>
      <div className={styles.content}>
        <div className={styles.contentImg}>
          {desktop && (
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${data?.asset?.url})`
              }}
            />
          )}
          <Paragraph className={styles.contentImgDescription}>
            {t('course-partnership.partner-benefits.paragraph2')}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export { PartnerBenefits };
