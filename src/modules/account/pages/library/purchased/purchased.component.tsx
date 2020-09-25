import { Preloader } from '@core/components';
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
      <Preloader id={Preloaders.libraryPurchased}>
        <Books data={purchased} type='purchased' />
      </Preloader>
    </div>
  );
};

export { Purchased };
