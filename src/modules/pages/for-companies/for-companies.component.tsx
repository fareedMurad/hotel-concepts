import * as React from 'react';
import { ForCompaniesProps } from './for-companies.props';
import * as styles from './for-companies.scss';
import { Header } from '@core/components/header';
import { useForCompaniesData } from './for-companies.hook';
import { H1, Button, H3, Icon, Paragraph } from '@core/components';
import { Benefits } from './sections/benefits';
import { HowWeWork } from './sections/how-we-work';
import { OurApproach } from './sections/our-approach';
import { WhyCordie } from './sections/why-cordie';

/**
 * Renders ForCompanies
 */
const ForCompanies: React.FC<ForCompaniesProps> = ({}) => {
  const navigation = useForCompaniesData();
  return (
    <div className={styles.forCompanies}>
      <div className={styles.header}>
        <Header navigation={navigation} />
        <div
          style={{
            backgroundImage: `url(${require('img/for-companies.png')})`
          }}
          className={styles.image}
        />
        <main className={styles.headerContent}>
          <H1 className={styles.headerCaption}>
            Hospitality education designed for impact
          </H1>
          <div className={styles.headerDescription}>
            Enforce your people and power your future
          </div>
          <Button className={styles.button}>
            <div>Contact Us</div>
            <div>&rarr;</div>
          </Button>
        </main>
        <div className={styles.arrow}>&#8595; Scroll</div>
      </div>
      <div className={styles.talentMatters}>
        <Icon name='abstract-1' />
        <H3>Talent matters</H3>
        <Paragraph className={styles.talentMattersParagraph}>
          Investing in your people solves skills shortages, <br /> develops new
          and creative growth areas, open up new <br /> revenue possibilities
          and prepares your hospitality <br /> business for a dynamic future.
        </Paragraph>
      </div>
      <Benefits />
      <HowWeWork />
      <OurApproach />
      <WhyCordie />
    </div>
  );
};

export { ForCompanies };
