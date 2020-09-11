import { State } from '@app/redux/state';
import { exclude } from '@core/shared/utils';
import classNames from 'classnames';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { PreloaderProps } from './preloader.props';
import * as styles from './preloader.scss';

/**
 * Renders Preloader
 */
const Preloader: React.FC<PreloaderProps> = ({
  id,
  children,
  className,
  thickness,
  size,
  ...props
}) => {
  const { active } = useSelector((state: State) => state.ui.preloader);
  const isActive =
    'isActive' in props ? props.isActive : active.some(one => one == id);

  if (isActive) {
    return (
      <React.Fragment>
        <div
          className={classNames(styles.overlay, className)}
          {...exclude(props, 'isActive')}
        >
          <div
            className={styles.preloader}
            style={{ width: size, height: size, borderWidth: thickness }}
          />
        </div>

        {children && typeof children == 'function' ? children(isActive) : null}
      </React.Fragment>
    );
  }
  return children || null;
};

Preloader.defaultProps = {
  id: null,
  children: null,
  size: 130,
  thickness: 10
};

export { Preloader };
