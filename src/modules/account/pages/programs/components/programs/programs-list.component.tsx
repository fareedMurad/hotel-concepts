import * as React from 'react';
import { ProgramsListProps } from './programs-list.props';
import * as styles from './programs-list.scss';
import { SingleProgram } from '../single-program';
import { useMyProgramsData } from '../../programs.hook';

/**
 * Renders Programs
 */
const ProgramsList: React.FC<ProgramsListProps> = ({ type }) => {
  const programs = useMyProgramsData();

  if (type === 'purchased')
    return (
      <div className={styles.programsList}>
        {programs
          .filter(el => el.purchased === true)
          .map((program, idx) => {
            return <SingleProgram program={program} type={type} />;
          })}
      </div>
    );

  return (
    <div className={styles.programsList}>
      {programs
        .filter(el => el.purchased === false)
        .map((program, idx) => {
          return <SingleProgram program={program} type={type} />;
        })}
    </div>
  );
};

export { ProgramsList };
