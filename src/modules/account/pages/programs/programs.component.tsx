import * as React from 'react';
import { ProgramsProps } from './programs.props';
import * as styles from './programs.scss';
import { H3, Icon } from '@core/components';
import { useMyProgramsData } from './programs.hook';
import { useDispatch } from 'react-redux';
// import { addToWishList } from '@app/redux/account';
import { SingleProgram } from './components/single-program';
import { NavLink, Route } from 'react-router-dom';
import classNames from 'classnames';
import { MyProducts } from '../components/my-products';
import { usePrefixedRoutes } from '@core/shared';
import { ProgramsList } from './components/programs';

/**
 * Renders Programs
 */
const Programs: React.FC<ProgramsProps> = ({}) => {
  const dispatch = useDispatch();
  const [wishlist, purchased] = usePrefixedRoutes(['wishlist', 'purchased']);
  return (
    <React.Fragment>
      <div className={styles.programs}>
        <div className={styles.programsTitle}>My programs</div>
        <div className={styles.programsLinks}>
          <div>Purchased Books</div>
          <div>Wish list</div>
        </div>
        {/* <div className={styles.programsList}>
          {programs.map((program, idx) => (
            <SingleProgram program={program} />
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
          ))}
        </div> */}
      </div>
    </React.Fragment>
  );
};

export { Programs };
