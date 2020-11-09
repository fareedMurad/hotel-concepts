import {
  addProgramToWishlist,
  removeProgramFromWishlist
} from '@app/redux/account';
import { State } from '@app/redux/state';
import { Button, Icon, Preloader } from '@core/components';
import { navigate } from '@router/store';
import { showModal } from '@ui/modal';
import { Modals, Preloaders } from '@ui/models';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProgramItemProps } from './program-item.props';
import * as styles from './program-item.scss';

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
  const dispatch = useDispatch();
  const { authorized } = useSelector((state: State) => state.auth);

  return (
    <React.Fragment>
      <div className={styles.programItem}>
        <div className={styles.container}>
          <Preloader id={Preloaders.programs}>
            <img src={url} alt='' />
            <div className={styles.info}>
              <div className={styles.type}>{complexityLevel}</div>
              <div className={styles.nameAndLike}>
                <div
                  className={styles.name}
                  onClick={() =>
                    dispatch(navigate(`/program/?programId=${id}`))
                  }
                >
                  {name}
                </div>

                <div className={styles.iconWrapper}>
                  <Icon
                    className={styles.like}
                    name={inWishlist ? 'heart' : 'like'}
                    onClick={event => {
                      const data = { id, preloader: Preloaders.categories };
                      authorized
                        ? dispatch(
                            inWishlist
                              ? removeProgramFromWishlist(data)
                              : addProgramToWishlist(data)
                          )
                        : dispatch(showModal(Modals.registration));
                    }}
                  />
                </div>
              </div>
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
            onClick={() => {
              dispatch(navigate(`/program/?programId=${id}`));
            }}
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
