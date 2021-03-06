import { Preloader } from '@core/components';
import { BookPreviewModal } from '@pages/components';
import { Preloaders } from '@ui/models';
import * as React from 'react';
import { Books } from '../components';
import { usePurchasedData } from './purchased.hook';
import * as styles from './purchased.scss';

/**
 * Renders Purchased
 */
const Purchased: React.FC = () => {
  const { purchased } = usePurchasedData();

  return (
    <div className={styles.purchased}>
      <Preloader className={styles.preloader} id={Preloaders.libraryPurchased}>
        <Books data={purchased} type='purchased' />
        <BookPreviewModal />
      </Preloader>
    </div>
  );
};

export { Purchased };
