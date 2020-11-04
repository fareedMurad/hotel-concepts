import { Icon } from '@core/components';
import * as React from 'react';
import { BrochureProps } from './brochure.props';
import * as styles from './brochure.scss';

/**
 * Renders Brochure
 */
const Brochure: React.FC<BrochureProps> = ({}) => (
  <div
    className={styles.brochure}
    style={{
      backgroundImage: `url(${require('img/banner.png')})`
    }}
  >
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.caption}>Unique learning</div>
        <div className={styles.caption}>Unique business impact</div>
      </div>
      <div className={styles.description}>
        Find out more about how we can collaborate towards your future.
      </div>
      <div className={styles.download} onClick={() => {}}>
        <div className={styles.info}>
          <Icon className={styles.infoIcon} name='download' />
          <div className={styles.infoCaption}>Brochure</div>
        </div>
        <div>
          <div className={styles.downloadCaption}>Download</div>
          <div className={styles.downloadSize}>PDF (15Mb)</div>
        </div>
      </div>
    </div>
  </div>
);

export { Brochure };
