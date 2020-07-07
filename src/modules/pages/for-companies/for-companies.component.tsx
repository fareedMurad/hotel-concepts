import * as React from 'react';
import { ForCompaniesProps } from './for-companies.props';
import * as styles from './for-companies.scss';
import { Header } from '@core/components/header';
import { H1, Button, H3, Icon, Paragraph, Footer } from '@core/components';
import { Benefits } from './sections/benefits';
import { HowWeWork } from './sections/how-we-work';
import { OurApproach } from './sections/our-approach';
import { WhyCordie } from './sections/why-cordie';
import { OurPrograms } from './sections/our-programs';
import { Brochure } from './sections/brochure';

/**
 * Renders ForCompanies
 */
const ForCompanies: React.FC<ForCompaniesProps> = ({}) => {
  return (
    <div className={styles.forCompanies}>
      <div className={styles.header}>
        <Header />
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
        <Icon name='home/abstract-1' />
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
      <OurPrograms />
      <div className={styles.container}>
        <Icon name='home/abstract-1' />
        <H3>
          Increase your competitive <br /> advantage with new <br /> knowledge.{' '}
        </H3>
        <Paragraph className={styles.competitiveText}>
          Kordie innovates the way hospitality professionals learn and travel
          organisations <br /> develop talent. Powerful knowledge is brought
          directly to you in a convenient, <br /> flexible way. Connect with
          Kordie’s renowned faculty and mentors from all over <br /> the world
          to deepen your expertise. Scale the learning across your hospitality{' '}
          <br /> business to drive powerful results.
        </Paragraph>
      </div>
      <Brochure />
      <Footer />
    </div>
  );
};

export { ForCompanies };
