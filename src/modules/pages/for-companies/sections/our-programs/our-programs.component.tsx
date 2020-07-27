import * as React from 'react';
import { OurProgramsProps } from './our-programs.props';
import * as styles from './our-programs.scss';
import { Paragraph, SectionTitle } from '@core/components/typography';
import { OurProgramsCard } from './our-programs-card';
import { useOurProgramsData } from './our-programs.hook';

/**
 * Renders OurPrograms
 */
const OurPrograms: React.FC<OurProgramsProps> = ({}) => {
  const cardsData = useOurProgramsData();

  return (
    <div className={styles.ourPrograms}>
      <div className={styles.container}>
        <SectionTitle>Our programs</SectionTitle>
        <Paragraph>
          Our programs are organised into <br /> subject-specific departments,
          such as:
        </Paragraph>
      </div>
      <div className={styles.cards}>
        {cardsData.map(card => {
          const { id, text, title, count } = card;
          return (
            <OurProgramsCard key={id} text={text} title={title} count={count} />
          );
        })}
      </div>
    </div>
  );
};

export { OurPrograms };
