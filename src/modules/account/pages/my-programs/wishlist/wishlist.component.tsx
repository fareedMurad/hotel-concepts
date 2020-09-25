import { Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import * as React from 'react';
import { Programs } from '../components';
import { useWishlistData } from './wishlist.hook';
import * as styles from './wishlist.scss';

/**
 * Renders Wishlist
 */
const Wishlist: React.FC = () => {
  const { wishlist } = useWishlistData();

  return (
    <div className={styles.wishlist}>
      <Preloader id={Preloaders.programsWishlist}>
        <Programs data={wishlist} type='wishlist' />
      </Preloader>
    </div>
  );
};

export { Wishlist };
