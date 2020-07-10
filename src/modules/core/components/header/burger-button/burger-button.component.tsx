import * as React from 'react';
import { BurgerButtonProps } from './burger-button.props';
import * as styles from './burger-button.scss';
import classNames from 'classnames';

/**
 * Renders BurgerButton
 */
const BurgerButton: React.FC<BurgerButtonProps> = ({ isInverted, openBurger, isOpened }) => {
  return (
    <div onClick={openBurger} className={styles.burgerButton}>
      <div className={classNames(styles.icon, {[styles.opened]: isOpened})}>
        <div className={styles.inner}></div>
      </div>
      <span className={classNames(styles.text, {[styles.inverted]: isInverted})}>Menu</span>
    </div>
  );
};

export { BurgerButton };
