import * as React from 'react';
import { CriteriaProps } from './criteria.props';
import * as styles from './criteria.scss';
import { H2, Icon, Paragraph, SectionTitle, Hr } from '@core/components';
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

const GET_HERO_IMAGE = gql`
  {
    asset(id: "7pCESbECH6qeh9RXgpf8aA") {
      url
    }
  }
`;

/**
 * Renders Criteria
 */
const Criteria: React.FC<CriteriaProps> = ({}) => {
  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  const { t } = useTranslation();

  return (
    <div
      className={styles.criteria}
      style={{
        backgroundImage: `url(${data?.asset?.url})`
      }}
    >
      <div className={styles.container}>
        <div className={styles.criteriaDescription}>
          <Icon name='abstract-1' />
          <SectionTitle className={styles.criteriaDescriptionTitle}>
            {t('course-partnership.criteria.title')}
          </SectionTitle>
          <Hr className={styles.hr} />
          <div className={styles.criteriasRow}>
            <div className={styles.wrap}>
              <H2 className={styles.orange}>1.0</H2>
              <Paragraph className={styles.white}>
                {t('course-partnership.criteria.cards.card1')}
              </Paragraph>
            </div>
            <div className={styles.wrap}>
              <H2 className={styles.orange}>2.0</H2>
              <Paragraph className={styles.white}>
                {t('course-partnership.criteria.cards.card2')}
              </Paragraph>
            </div>
            <div className={styles.wrap}>
              <H2 className={styles.orange}>3.0</H2>
              <Paragraph className={styles.white}>
                {t('course-partnership.criteria.cards.card3')}
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Criteria };
