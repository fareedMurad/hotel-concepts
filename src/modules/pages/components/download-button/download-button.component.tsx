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
  url,
  contentType
}) => {
  return (
    <a className={styles.downloadButton} download target='__blank' href={url}>
      <div className={styles.description}>
        <Icon name='download' />
        <div className={styles.descriptionDetails}>
          <div className={styles.fileCaption}>{caption}</div>
          <div>{description}</div>
        </div>
      </div>
      <div className={styles.download}>
        <div className={styles.downloadText}>Download</div>
        <div className={styles.downloadDetails}>
          {filetype} {contentType && contentType.substring(12).toUpperCase()}(
          {size})
        </div>
      </div>
    </a>
  );
};

export { DownloadButton };
