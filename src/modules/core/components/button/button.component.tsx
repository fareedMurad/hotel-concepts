import * as React from 'react';
import { ButtonProps } from './button.props';
import * as styles from './button.scss';
import classNames from 'classnames';
import { capitalize } from '@core/shared';
import { Icon } from '../icon';

/**
 * Renders Button
 */
const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  children,
  theme,
  size,
  arrow,
  width,
  ...props
}) => (
  <button
    className={classNames(
      className,
      styles.button,
      styles['button' + capitalize(theme)],
      styles['button' + capitalize(size)],
      {
        [styles.buttonDisabled]: disabled
      }
    )}
    disabled={disabled}
    {...props}
    style={{ width, justifyContent: arrow && 'space-between' }}
  >
    <div>{children}</div>{' '}
    {arrow && (
      <div className={styles.arrow}>
        <Icon
          className={classNames(styles.icon, {
            [styles.iconBlack]: theme === 'secondary'
          })}
          name='arrows/button-arrow'
        />
      </div>
    )}
  </button>
);

/**
 * Defaults
 */
Button.defaultProps = {
  type: 'button',
  theme: 'primary',
  size: 'md',
  className: '',
  disabled: false
};

export { Button };
