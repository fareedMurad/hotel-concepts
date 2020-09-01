import * as React from 'react';
import { PartnerBenefitsProps } from './partner-benefits.props';
import * as styles from './partner-benefits.scss';
import { Paragraph, Icon, H4, SectionTitle } from '@core/components';
import { useMediaPoints } from '@core/shared';
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

const GET_HERO_IMAGE = gql`
  {
    asset(id: "4VQYvPFaUzF0IlADKqNW6E") {
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
        <SectionTitle>
          {t('course-partnership.partner-benefits.title')}
        </SectionTitle>
        <Paragraph className={styles.paragraph}>
          {t('course-partnership.partner-benefits.description')}
        </Paragraph>
        <div className={styles.contentList}>
          <div className={styles.contentListItem}>
            <Icon className={styles.listIcon} name='list-dot' />
            <H4 className={styles.listTitle}>
              {t('course-partnership.partner-benefits.list.item1')}
            </H4>
          </div>
          <div className={styles.contentListItem}>
            <Icon className={styles.listIcon} name='list-dot' />
            <H4 className={styles.listTitle}>
              {t('course-partnership.partner-benefits.list.item2')}
            </H4>
          </div>
          <div className={styles.contentListItem}>
            <Icon className={styles.listIcon} name='list-dot' />
            <H4 className={styles.listTitle}>
              {' '}
              {t('course-partnership.partner-benefits.list.item3')}
            </H4>
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
