import * as React from 'react';
import * as styles from './program-item.scss';
import { Button, Icon, Preloader } from '@core/components';
import { Modals, Preloaders } from '@ui/models';
import {
  addProgramToWishlist,
  removeProgramFromWishlist
} from '@app/redux/account';
import { useDispatch, useSelector } from 'react-redux';
import { ProgramItemProps } from './program-item.props';
import { State } from '@app/redux/state';
import { navigate } from '@router/store';
import { showModal } from '@ui/modal';
import { queryImageUrl } from '@core/shared';

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
  const {
    auth: { authorized },
    general: {
      browserVersion: { name: browserName, version }
    }
  } = useSelector((state: State) => state);
  const oldSafari = browserName === 'Safari' && version < '14';
  const imageSrc = oldSafari
    ? `${url}?h=500&w=900`
    : `${url}?q=80&fm=webp&h=500&w=900`;

  return (
    <React.Fragment>
      <div className={styles.programItem}>
        <div className={styles.container}>
          <Preloader id={Preloaders.programs}>
            <img src={imageSrc} alt='' />
            <div className={styles.info}>
              <div className={styles.type}>{complexityLevel}</div>
              <div className={styles.nameAndLike}>
                <div
                  className={styles.name}
                  onClick={() => {
                    // #non-clickable
                    dispatch(navigate(`/program/?programId=${id}`));
                  }}
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
              // #non-clickable
              // dispatch(navigate(`/program/?programId=${id}`));
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
