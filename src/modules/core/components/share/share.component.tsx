import * as React from 'react';
import { ShareProps } from './share.props';
import * as styles from './share.scss';
import { Icon } from '..';
import { Trail } from 'react-spring/renderprops';
import { useClickOutside } from '@core/shared';

/**
 * Renders Share
 */
const Share: React.FC<ShareProps> = ({}) => {
  const social = ['facebook-small', 'twitter', 'instagram-small'];
  const [showSocial, setShowSocial] = React.useState(false);
  const socialsRef = React.useRef();
  useClickOutside(socialsRef, () => setShowSocial(false));
  return (
    <div
      ref={socialsRef}
      className={styles.share}
      onClick={() => {
        setShowSocial(!showSocial);
      }}
    >
      <span className={showSocial && styles.active}>Share</span>
      <a className={styles.shareButton}>
        <Icon name='share' />
      </a>

      <ul className={styles.shareButtonItems}>
        <Trail
          items={social}
          keys={item => item}
          to={{
            opacity: showSocial && '1.0'
          }}
        >
          {social => props => (
            <li style={props}>
              <Icon name={social} />
            </li>
          )}
        </Trail>
      </ul>
    </div>
  );
};

export { Share };
