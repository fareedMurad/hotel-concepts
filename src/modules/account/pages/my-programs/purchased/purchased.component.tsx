import { Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import * as React from 'react';
import { Programs } from '../components';
import { usePurchasedData } from './purchased.hook';
import * as styles from './purchased.scss';

/**
 * Renders Purchased
 */
const Purchased: React.FC = () => {
  const { purchased } = usePurchasedData();

  return (
    <div className={styles.purchased}>
      <Preloader id={Preloaders.programsPurchased}>
        <Programs data={purchased} type='purchased' />
      </Preloader>
    </div>
  );
};

export { Purchased };
