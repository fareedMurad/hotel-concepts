import * as React from 'react';
import { CriteriaProps } from './criteria.props';
import * as styles from './criteria.scss';
import { H2, Icon, Paragraph } from '@core/components';

/**
 * Renders Criteria
 */
const Criteria: React.FC<CriteriaProps> = ({ }) => {
  return (
    <div
      className={styles.criteria}
      style={{
        backgroundImage: `url(${require('img/course/criteria.png')})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        backgroundPosition: 'center top'
      }}
    >
      <div className={styles.container}>
        <div className={styles.criteriaDescription}>
          <Icon name='abstract-1' />
          <H2 className={styles.criteriaDescriptionTitle}>
            What criteria do you <br /> need to meet to be a <br /> Kordie
            partner?
          </H2>
          <div className={styles.hr} />
          <div className={styles.criteriasRow}>
            <div className={styles.wrap}>
              <H2 className={styles.orange}>0.1</H2>
              <Paragraph className={styles.white}>
                Demonstrable expertise in an area of knowledge related to
                hospitality industry
              </Paragraph>
            </div>
            <div className={styles.wrap}>
              <H2 className={styles.orange}>0.2</H2>
              <Paragraph className={styles.white}>
                A commitment to advancing and democratising hospitality
                education
              </Paragraph>
            </div>
            <div className={styles.wrap}>
              <H2 className={styles.orange}>0.3</H2>
              <Paragraph className={styles.white}>
                Substantial experience and reputation
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Criteria };
