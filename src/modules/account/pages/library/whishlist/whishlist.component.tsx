import { Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import * as React from 'react';
import { Books } from '../components';
import { useWishlistData } from './whishlist.hook';
import * as styles from './whishlist.scss';

/**
 * Renders Whishlist
 */
const Whishlist: React.FC = () => {
  const { wishlist } = useWishlistData();

  return (
    <div className={styles.wishlist}>
      <Preloader id={Preloaders.libraryWishlist}>
        <Books data={wishlist} type='wishlist' />
      </Preloader>
    </div>
  );
};

export { Whishlist };
