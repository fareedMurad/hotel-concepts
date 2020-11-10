import * as React from 'react';
import { CardDropdownProps } from './card-dropdown.props';
import * as styles from './card-dropdown.scss';
import classNames from 'classnames';
import { useTransition, animated } from 'react-spring';

/**
 * Renders CardDropdown
 */
const CardDropdown: React.FC<CardDropdownProps> = ({
  className,
  children,
  height,
  open,
  onMouseLeave
}) => {
  const expand = useTransition(open, null, {
    from: {
      opacity: '0',
      transform: 'translate3d(0px, 15px, 0px)'
    },
    enter: {
      opacity: '1',
      transform: 'translate3d(0px, 0px, 0px)'
    }
    // leave: { transform: 'translate3d(0,0,0)' }
  });

  console.log(open);

  return (
    <>
      {expand.map(({ props, key }) => (
        <animated.div
          key={key}
          style={props}
          className={classNames(className, styles.card)}
          onMouseLeave={onMouseLeave}
        >
          <div className={styles.helper} />
          <div className={styles.content}>{children}</div>
        </animated.div>
      ))}
    </>
  );
};

export { CardDropdown };
