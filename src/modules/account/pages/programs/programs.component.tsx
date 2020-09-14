import * as React from 'react';
import { ProgramsProps } from './programs.props';
import * as styles from './programs.scss';
import { H3 } from '@core/components';
import { useMyProgramsData } from './programs.hook';
import { useDispatch } from 'react-redux';
import { addToWishList } from '@app/redux/account';

/**
 * Renders Programs
 */
const Programs: React.FC<ProgramsProps> = ({}) => {
  const programs = useMyProgramsData();
  const dispatch = useDispatch();
  return (
    <div className={styles.programs}>
      <H3>Programs</H3>
      <div className={styles.myPrograms}>
        {programs.map((program, idx) => {
          return (
            <div key={idx + program.name} className={styles.program}>
              <img src={program.picture} alt={program.name} />
              <div className={styles.description}>
                <div className={styles.descriptionLevel}>{program.level}</div>
                <H3>{program.name}</H3>
                <div className={styles.additionalInfo}>
                  <div>{program.weeks} weeks</div>
                  <div>{program.sprints}sprints</div>
                  <div>{program.price}$</div>
                </div>
                <div className={styles.programDescription}>
                  {program.description}
                </div>
              </div>
              <button className={styles.accessProgram}>Access Program</button>
              <div
                className={styles.addToWishList}
                onClick={() => dispatch(addToWishList(program.id))}
              >
                &#9829;
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Programs };
