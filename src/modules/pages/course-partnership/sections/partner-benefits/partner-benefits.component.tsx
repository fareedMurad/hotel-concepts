import * as React from 'react';
import { PartnerBenefitsProps } from './partner-benefits.props';
import * as styles from './partner-benefits.scss';
import { Paragraph, Icon, H4, SectionTitle } from '@core/components';
import { useMediaPoints } from '@core/shared';
import { gql, useQuery } from '@apollo/client';

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

  return (
    <div className={styles.partnerBenefits}>
      <div className={styles.content}>
        <SectionTitle>
          Benefits of becoming <br /> a Partner
        </SectionTitle>
        <Paragraph className={styles.paragraph}>
          As Curriculum Partners, co-developing programs, companies receive an
          incredible platform to:
        </Paragraph>
        <div className={styles.contentList}>
          <div className={styles.contentListItem}>
            <Icon className={styles.listIcon} name='list-dot' />
            <H4 className={styles.listTitle}>Build brand visibility</H4>
          </div>
          <div className={styles.contentListItem}>
            <Icon className={styles.listIcon} name='list-dot' />
            <H4 className={styles.listTitle}>
              Showcase subject matter expertise
            </H4>
          </div>
          <div className={styles.contentListItem}>
            <Icon className={styles.listIcon} name='list-dot' />
            <H4 className={styles.listTitle}>Enhance thought leadership</H4>
          </div>
        </div>
        <div className={styles.hr} />
        <Paragraph className={styles.fz}>
          This also contributes to nurturing a <br /> uniquely qualified talent
          pipeline, and <br /> encourages product andoffering usage.
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
            For students, this represents an unrivalled <br />
            opportunity to learn the most-cutting edge skills <br /> from the
            brands leading the industry and address real-world situations
            through cross-disciplinary <br /> collaboration.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export { PartnerBenefits };
