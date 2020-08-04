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
  useClickOutside(socialsRef, () => setShowSocial(false));

  return (
    <div
      ref={socialsRef}
      className={styles.share}
      onClick={() => {
        setShowSocial(!showSocial);
      }}
    >
      <span className={showSocial ? styles.active : styles.none}>Share</span>
      <a className={styles.shareButton}>
        <Icon name='share' />
      </a>
      <FacebookProvider appId='978057235952932'>
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
                <Share href={link}>
                  <Icon name={social} />
                </Share>
              </li>
            )}
          </Trail>
        </ul>
      </FacebookProvider>
    </div>
  );
};

export { ShareSocial };
