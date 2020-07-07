import * as React from 'react';
import { OurProgramsProps } from './our-programs.props';
import * as styles from './our-programs.scss';
import { H1, Paragraph } from '@core/components/typography';
import { OurProgramsCard } from './our-programs-card';
import { useOurPrograms } from './our-programs.hook';

/**
 * Renders OurPrograms
 */
const OurPrograms: React.FC<OurProgramsProps> = ({}) => {
  const cardsData = useOurPrograms();

  return (
    <div className={styles.ourPrograms}>
      <div className={styles.container}>
        <H1>Our programs</H1>
        <Paragraph>
          Our programs are organised into <br /> subject-specific departments,
          such as:
        </Paragraph>
      </div>
      <div className={styles.cards}>
        <div className={styles.wrapper}>
          {cardsData
            .filter((el, idx) => idx < 3)
            .map(card => {
              const { id, text, title, count } = card;
              return (
                <OurProgramsCard
                  key={id}
                  text={text}
                  title={title}
                  count={count}
                />
              );
            })}
        </div>
        <div className={styles.wrapper}>
          {cardsData
            .filter((el, idx) => idx >= 3)
            .map(card => {
              const { id, text, title, count } = card;
              return (
                <OurProgramsCard
                  key={id}
                  text={text}
                  title={title}
                  count={count}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export { OurPrograms };
