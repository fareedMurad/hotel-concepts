import * as React from 'react';
import * as styles from './link-dropdown.scss';
import { Icon } from '@core/components';
import { LinkDropdownProps } from './link-dropdown.props';
import classNames from 'classnames';
import { navigate } from '@router/store';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@app/redux/state';

/**
 * Renders LinkDropdown
 */
const LinkDropdown: React.FC<LinkDropdownProps> = ({
  className,
  link,
  image,
  to,
  onClick
}) => {
  const dispatch = useDispatch();
  const [hover, setHover] = React.useState(false);

  const {
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);
  const oldSafari = browserName === 'Safari' && browserVersion < '14';

  const url = oldSafari ? `${image}?fm=png` : `${image}?fm=webp`;
  return (
    <div
      className={classNames(className, styles.link)}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={styles.link}
        onClick={() => {
          // #non-clickable temp solution
          if (!to) {
            return;
          }
          dispatch(navigate(to));
        }}
      >
        <div className={styles.linkTitle}>
          <div>{link}</div>{' '}
          <Icon name={'arrows/arrow-right-primary'} className={styles.arrow} />
        </div>
        <div
          className={styles.linkImage}
          //hardcoded image
          style={{
            backgroundImage: `url(${url})`
          }}
        />
      </div>
    </div>
  );
};

export { LinkDropdown };
