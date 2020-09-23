import * as React from 'react';
import { MyProductsProps } from './my-products.props';
import * as styles from './my-products.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Icon } from '@core/components';

/**
 * Renders MyProducts
 */
const MyProducts: React.FC<MyProductsProps> = ({
  children,
  title,
  products,
  navigate
}) => {
  return (
    <div className={styles.myProducts}>
      <div className={styles.myProductsTitle}>{title}</div>
      <div className={styles.myProductsLinks}>
        <NavLink
          className={styles.myProductsLinksLink}
          activeClassName={styles.myProductsLinksActive}
          exact
          to={`/account/${navigate}/purchased`}
        >
          Purchased {products}
        </NavLink>
        <NavLink
          className={classNames(
            styles.myProductsLinksLink,
            styles.myProductsLinksWish
          )}
          exact
          activeClassName={styles.myProductsLinksActive}
          to={`/account/${navigate}/wishlist`}
        >
          Wish list{' '}
          <Icon name='like' className={styles.myProductsLinksWishIcon} />
        </NavLink>
      </div>
      {children}
    </div>
  );
};

export { MyProducts };
