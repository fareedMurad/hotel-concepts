import * as React from 'react';
import { SingleProgramProps } from './single-program.props';
import * as styles from './single-program.scss';
import { H3, Button } from '@core/components';

/**
 * Renders SingleProgram
 */
const SingleProgram: React.FC<SingleProgramProps> = ({ program }) => {
  return (
    <div className={styles.singleProgram}>
      <img src={program.picture} alt={program.name} width={316} height={220} />
      <div className={styles.description}>
        <div className={styles.descriptionLevel}>{program.level}</div>
        <H3>{program.name}</H3>
        <div className={styles.descriptionAdditionalInfo}>
          <div>{program.weeks} weeks</div>
          <div>{program.sprints}sprints</div>
          <div>{program.price}$</div>
        </div>
        <div className={styles.descriptionText}>{program.description}</div>
        <div className={styles.descriptionButton}>
          <Button arrow='→'>Access program</Button>
        </div>
      </div>
    </div>
  );
};

export { SingleProgram };
