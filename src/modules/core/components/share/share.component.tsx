import * as React from 'react';
import { ShareProps } from './share.props';
import * as styles from './share.scss';
import { Icon } from '..';
import { Trail } from 'react-spring/renderprops';
import { useClickOutside } from '@core/shared';
import { FacebookProvider, Share } from 'react-facebook';

/**
 * Renders Share
 */
const ShareSocial: React.FC<ShareProps> = ({ link }) => {
  const social = ['facebook-small', 'twitter', 'instagram-small'];
  const [showSocial, setShowSocial] = React.useState(false);
  const socialsRef = React.useRef();
  
  return (
    <div
      ref={socialsRef}
      className={styles.share}
      onClick={() => {
        setShowSocial(!showSocial);
      }}
    >
      <span className={showSocial ? styles.active : styles.none}>Share</span>
      <a
        className={styles.shareButton}
        onMouseEnter={() => setShowSocial(true)}
        onMouseLeave={() => setShowSocial(false)}
      >
        <Icon name='share' />
      </a>
      <ul
        className={styles.shareButtonItems}
        onMouseEnter={() => setShowSocial(true)}
        onMouseLeave={() => setShowSocial(false)}
      >
        <Trail
          items={social}
          keys={item => item}
          to={{
            opacity: showSocial && '1.0'
          }}
        >
          {social => props => (
            <li style={props}>
              <FacebookProvider appId='978057235952932'>
                <Share href={link}>
                  {({ handleClick, loading }) => (
                    <Icon name={social} onClick={handleClick} />
                  )}
                </Share>
              </FacebookProvider>
            </li>
          )}
        </Trail>
      </ul>
    </div>
  );
};

export { ShareSocial };
