import * as React from 'react';
import { BookOverviewModalProps } from './book-overview-modal.props';
import * as styles from './book-overview-modal.scss';
import { Modal } from '@core/components';
import { Modals } from '@ui/models';

/**
 * Renders BookOverviewModal
 */
const BookOverviewModal: React.FC<BookOverviewModalProps> = ({
  url,
  hideComponent
}) => {
  return (
    <Modal id={Modals.bookOverview} className={styles.bookOverview}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'fill',
          backgroundPosition: 'center',
          width: '90vw',
          height: '80vh'
        }}
      >
        <div className={styles.close} onClick={hideComponent}>
          x
        </div>
      </div>
    </Modal>
  );
};

export { BookOverviewModal };
