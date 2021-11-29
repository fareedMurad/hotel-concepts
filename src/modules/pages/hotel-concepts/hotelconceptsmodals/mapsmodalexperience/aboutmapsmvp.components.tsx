import * as React from 'react';
import * as styles from './aboutmapsmvp.scss';
import { Icon, Modal, Preloader } from '@core/components';
import { Modals } from '@ui/models';
import { Slider } from '@core/components';
import { closeModal } from '@ui/modal';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { State } from '@app/redux/state';

// Modal Contant
import { AboutMapsModal } from '../components/mapsmodal';
import { MapsHotalModal } from '../components/maphotel';
import { HarithsaVillasModal } from '../components/harithsavillas';
import { ValleMaraHotel } from '../components/vallemara';
import { ClinkHostalsModal } from '../components/clinkhostals';
import { FeldererBoutiqueHotel } from '../components/feldererboutiquehotel';
import { MilhaidooLslandModal } from '../components/milhaidooisland';
import { LocandaMistralModal } from '../components/locandamistral';
import { PaloriaApartmentsModal } from '../components/paloriaapartments ';
import { KonceptHotelsModal } from '../components/koncepthotels';

import { SliderControls } from './slider-controls';
// import { SliderItem } from './slider-controls/index';

/**
 * Slider responsive
 */
const responsive = {
  all: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

/**
 * Renders AboutMapsMvpModal
 */
const AboutMapsMvpModal: React.FC = () => {
  const dispatch = useDispatch();
  // const [activeModal, setActiveModal] = useState<'user1' | 'user2'>('user1');
  const { active } = useSelector((state: State) => state.ui.modal);
  /**
   * SUPER
   */
  const [handleAnim, setHandleAnim] = useState(false);
  React.useEffect(() => {
    // if (activeModal === 'user1') {
    //   setHandleAnim(true);
    // }
    if (!active.includes('mapsModal')) {
      setHandleAnim(false);
    }
  }, [active]);
  // const isRegisterModalActive = activeModal === 'user1';
  const preventAnimationReset = handleAnim || !active.includes('mapsModal');
  /**
   * COSTILE
   */
  return (
    <Modal
      id={Modals.mapsModal}
      className={styles.mapsModal}
      noReset={preventAnimationReset}
    >
      <Icon
        name='close-modal'
        className={styles.closeModal}
        onClick={() => dispatch(closeModal(Modals.mapsModal))}
      />
      <Slider
        className={styles.slider}
        responsive={responsive}
        itemClass={styles.slide}
        customButtonGroup={<SliderControls />}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        transitionDuration={1000}
      >
        {/* {activeModal === 'user1' ? : <h1>hello</h1>} */}
        <AboutMapsModal />
        <MapsHotalModal />
        <HarithsaVillasModal />
        <ValleMaraHotel />
        <ClinkHostalsModal />
        <FeldererBoutiqueHotel />
        <MilhaidooLslandModal />
        <LocandaMistralModal />
        <PaloriaApartmentsModal />
        <KonceptHotelsModal />
      </Slider>
    </Modal>
  );
};

export { AboutMapsMvpModal };
