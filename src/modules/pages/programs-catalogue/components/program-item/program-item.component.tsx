import * as React from 'react';
import { ProgramItemProps } from './program-item.props';
import * as styles from './program-item.scss';
import { Button, Icon, Preloader } from '@core/components';
import { useHistory } from 'react-router';
import { Preloaders } from '@ui/models';
import { State } from '@app/redux/state';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProgramToWishlist,
  removeProgramFromWishlist
} from '@app/redux/account';

/**
 * Renders ProgramItem
 */
const ProgramItem: React.FC<ProgramItemProps> = ({ program }) => {
  const {
    id,
    name,
    slug,
    weeks,
    price,
    sprints,
    category,
    description,
    complexityLevel,
    inWishlist,
    courseImage: {
      file: { url }
    }
  } = program;
  const history = useHistory();
  const dispatch = useDispatch();
  const { authorized } = useSelector((state: State) => state.auth);
  const handleClick = id => () =>
    history.push(`/program/${slug}?programId=${id}`);

  return (
    <React.Fragment>
      <div className={styles.programItem}>
        {authorized && (
          <Icon
            className={styles.like}
            name={inWishlist ? 'heart' : 'like'}
            onClick={event => {
              const data = { id, preloader: Preloaders.categories };

              dispatch(
                inWishlist
                  ? removeProgramFromWishlist(data)
                  : addProgramToWishlist(data)
              );
            }}
          />
        )}
        <div className={styles.container}>
          <Preloader id={Preloaders.programs}>
            <img src={url} alt='' />
            <div className={styles.info}>
              <div className={styles.type}>{complexityLevel}</div>
              <div className={styles.name}>{name}</div>
              <div className={styles.secondaryInfo}>
                {weeks} weeks
                <span className={styles.vhr}>|</span>
                {sprints} sprints
                <span className={styles.vhr}>|</span>
                {price}$
              </div>
              <div className={styles.description}>{description}</div>
            </div>
          </Preloader>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            onClick={handleClick(id)}
            className={styles.button}
            children='Find out more'
            arrow
          />
        </div>
      </div>
      <div className={styles.hr} />
    </React.Fragment>
  );
};

export { ProgramItem };
