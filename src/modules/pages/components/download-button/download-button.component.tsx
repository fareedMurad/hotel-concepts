import * as React from 'react';
import { DownloadButtonProps } from './download-button.props';
import * as styles from './download-button.scss';
import { Icon } from '@core/components';

/**
 * Renders DownloadButton
 */
const DownloadButton: React.FC<DownloadButtonProps> = ({
  caption,
  description,
  filetype,
  size,
  url
}) => {
  return (
    <a className={styles.downloadButton} download href={url}>
      <div className={styles.description}>
        <Icon name='download' />
        <div className={styles.descriptionDetails}>
          <div>{caption}</div>
          <div>{description}</div>
        </div>
      </div>
      <div className={styles.download}>
        <div className={styles.downloadText}>Download</div>
        <div className={styles.downloadDetails}>
          {filetype} ({size})
        </div>
      </div>
    </a>
  );
};

export { DownloadButton };
