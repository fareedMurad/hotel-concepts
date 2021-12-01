import * as React from 'react';
import * as styles from './peekprogress.scss';
import { useTranslation } from 'react-i18next';
import { Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import { ProgramPreviewImage } from '../../components/program-preview-image';
import { State } from '@app/redux/state';
import { useDispatch, useSelector } from 'react-redux';
// import { PeekProgressVideoProps } from './peekprogress.props';

/**
 * Renders WhoEnroll
 */
const PeekProgressVideo = () => {
  const { t } = useTranslation();
  const {
    auth: { authorized },
    general: {
      browserVersion: { name: browserName, version }
    }
  } = useSelector((state: State) => state);
  const oldSafari = browserName === 'Safari' && version <= '14';
  const imageSrc = oldSafari
    ? `${'https://www.youtube.com/'}?h=500&w=900`
    : `${'https://www.youtube.com/'}?q=80&fm=webp&h=500&w=900`;

  return (
    <React.Fragment>
      <section className={styles.peekProgress}>
        <div className={styles.title}>
          <div className={styles.innerbox}>
            <h1 className={styles.sectiontitle}>
              {t('hotel-concepts.peek-program.title')}
            </h1>
          </div>
        </div>
        {/* <Preloader id={Preloaders.programs}> */}
        <div className={styles.videoContent}>
          <ProgramPreviewImage
            imageSrc={imageSrc}
            previewVideo={'https://www.youtube.com/watch?v=RgzLnmTaCAU'}
          />
        </div>
        {/* </Preloader> */}
      </section>
    </React.Fragment>
  );
};
export { PeekProgressVideo };
