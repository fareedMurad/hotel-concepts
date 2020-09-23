import * as React from 'react';
import { SingleProgramProps } from './single-program.props';
import * as styles from './single-program.scss';
import { H3, Button } from '@core/components';

/**
 * Renders SingleProgram
 */
const SingleProgram: React.FC<SingleProgramProps> = ({ program, type }) => {
  return (
    <div className={styles.singleProgram}>
      <img src={program.picture} alt={program.name} width={317} height={221} />
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
          {type === 'purchased' ? (
            <Button width={224} arrow='→'>
              Access program
            </Button>
          ) : (
            <Button width={224} arrow='→'>
              Add to card
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export { SingleProgram };
