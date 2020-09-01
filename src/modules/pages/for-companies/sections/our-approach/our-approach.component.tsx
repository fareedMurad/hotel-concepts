import * as React from 'react';
import { OurApproachProps } from './our-approach.props';
import * as styles from './our-approach.scss';
import { H2, Paragraph } from '@core/components';
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

const GET_HERO_IMAGE = gql`
  {
    asset(id: "6pTdyeTOG6LSBECHix8TyT") {
      url
    }
  }
`;

/**
 * Renders OurApproach
 */
const OurApproach: React.FC<OurApproachProps> = ({}) => {
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(GET_HERO_IMAGE);

  return (
    <div className={styles.ourApproach}>
      <div
        style={{
          backgroundImage: `url(${data?.asset?.url})`
        }}
        className={styles.image}
      >
        <div className={styles.content}>
          <H2 className={styles.title}>
            {t('for-companies.our-approach.title')}
          </H2>
          <Paragraph className={styles.body}>
            {t('for-companies.our-approach.text')}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export { OurApproach };
