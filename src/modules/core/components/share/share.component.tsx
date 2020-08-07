import * as React from 'react';
import { ShareProps } from './share.props';
import * as styles from './share.scss';
import { Icon } from '..';
import { Trail } from 'react-spring/renderprops';
import { useClickOutside } from '@core/shared';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from 'react-share';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';

/**
 * Renders Share
 */
const ShareSocial: React.FC<ShareProps> = ({ link }) => {
  const ref = React.useRef();
  const social = [
    {
      key: 1,
      component: (
        <FacebookShareButton style={{ outline: 'none' }} url={link}>
          <FacebookIcon
            className={styles.icon}
            style={{ objectFit: 'fill' }}
            size={35}
            round
          />
        </FacebookShareButton>
      )
    },
    {
      key: 2,
      component: (
        <LinkedinShareButton style={{ outline: 'none' }} url={link}>
          <LinkedinIcon className={styles.icon} size={35} round />
        </LinkedinShareButton>
      )
    },
    {
      key: 3,
      component: (
        <TwitterShareButton style={{ outline: 'none' }} url={link}>
          <TwitterIcon className={styles.icon} size={35} round />
        </TwitterShareButton>
      )
    }
  ];
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
          keys={social => social.key}
          to={{
            opacity: showSocial && '1.0'
          }}
        >
          {el => props => <li style={props}>{el.component}</li>}
        </Trail>
      </ul>
    </div>
  );
};

export { ShareSocial };
