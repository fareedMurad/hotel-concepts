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
import { showModal } from '@ui/modal';
import { usePrice } from '@core/shared/hooks/use-price';
import Popup from 'reactjs-popup';
import { WatchButton } from '@core/components/watch-button';
import ReactPlayer from 'react-player';
import { navigate } from '@router/store/actions';

/**
 * Program preview image
 */

const ProgramPreviewImage: React.FC<{
  imageSrc: string;
  previewVideo: any;
}> = ({ imageSrc, previewVideo }) => {
  const videoRef = React.useRef(null) as React.MutableRefObject<
    HTMLVideoElement
  >;
  const [duration, setDuration] = React.useState(0);

  /**
   * convert duration
   */
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration - minutes * 60);
  return (
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <Popup
        contentStyle={{
          border: 'none',
          background: 'transparent',
          width: '100%'
        }}
        trigger={
          <div className={styles.imageWatchButton}>
            <WatchButton
              time={`${minutes}:${seconds}`}
              titleText='Play preview'
            />
          </div>
        }
        position='top center'
        modal
        lockScroll
      >
        <ReactPlayer
          url={`${previewVideo?.file.url}`}
          controls
          style={{ margin: 'auto', maxWidth: '100%' }}
          muted={true}
          playing={true}
        />
      </Popup>
      <video
        ref={videoRef}
        className={styles.video}
        src={previewVideo?.file.url}
        muted
        onLoadedMetadata={({ currentTarget }) =>
          setDuration(currentTarget.duration)
        }
      />
    </div>
  );
};

/**
 * Renders ProgramItem
 */
const ProgramItem: React.FC<ProgramItemProps> = ({ program }) => {
  const {
    id,
    name,
    slug,
    weeks,
    sprints,
    category,
    description,
    complexityLevel,
    inWishlist,
    pricing,
    previewVideo,
    courseImage: {
      file: { url }
    }
  } = program;

  const { discountPrice, price } = usePrice(pricing);

  const dispatch = useDispatch();
  const {
    auth: { authorized },
    general: {
      browserVersion: { name: browserName, version }
    }
  } = useSelector((state: State) => state);
  const oldSafari = browserName === 'Safari' && version <= '14';
  const imageSrc = oldSafari
    ? `${url}?h=500&w=900`
    : `${url}?q=80&fm=webp&h=500&w=900`;

  return (
    <React.Fragment>
      <div className={styles.programItem}>
        <div className={styles.container}>
          <Preloader id={Preloaders.programs}>
            {/* <img src={imageSrc} alt='' /> */}
            <ProgramPreviewImage
              imageSrc={imageSrc}
              previewVideo={previewVideo.video}
            />
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
                <div className={styles.price}>
                  <span className={discountPrice && styles.priceOld}>
                    $ {price}
                  </span>
                  {discountPrice && (
                    <span className={styles.priceNew}>$ {discountPrice}</span>
                  )}
                </div>
              </div>
              <div className={styles.description}>{description}</div>
            </div>
          </Preloader>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            onClick={() => {
              // #non-clickable
              //dispatch(navigate(`/program/?programId=${id}`));
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
