import * as React from 'react';
import { PartnerBenefitsProps } from './partner-benefits.props';
import * as styles from './partner-benefits.scss';
import { H2, Paragraph, Icon, H4 } from '@core/components';
import { useMediaPoints } from '@core/shared';

/**
 * Renders PartnerBenefits
 */
const PartnerBenefits: React.FC<PartnerBenefitsProps> = ({}) => {
  const { desktop } = useMediaPoints();

  return (
    <div className={styles.partnerBenefits}>
      <div className={styles.content}>
        <H2>Benefits of becoming a Partner</H2>
        <Paragraph>
          As Curriculum Partners, co-developing programs, companies receive an
          incredible platform to:{' '}
        </Paragraph>
        <div className={styles.contentList}>
          <div className={styles.contentListItem}>
            <Icon className={styles.listIcon} name='list-dot' />
            <H4>Build brand visibility</H4>
          </div>
          <div className={styles.contentListItem}>
            <Icon className={styles.listIcon} name='list-dot' />
            <H4>Showcase subject matter expertise</H4>
          </div>
          <div className={styles.contentListItem}>
            <Icon className={styles.listIcon} name='list-dot' />
            <H4>Enhance thought leadership</H4>
          </div>
        </div>
        <div className={styles.hr} />
        <Paragraph>
          This also contributes to nurturing a uniquely qualified talent
          pipeline, and encourages product andoffering usage.
        </Paragraph>
      </div>
      <div className={styles.content}>
        <div className={styles.contentImg}>
          {desktop && (
            <div
              style={{
                backgroundImage: `url(${require('img/course/partner.png')})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '120%',
                backgroundPosition: 'center',
                height: '420px',
                borderRadius: '5px'
              }}
            />
          )}
          <Paragraph className={styles.contentImgDescription}>
            For students, this represents an unrivalled opportunity to learn the
            most-cutting edge skills from the brands leading the industry and
            address real-world situations through cross-disciplinary
            collaboration.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export { PartnerBenefits };
