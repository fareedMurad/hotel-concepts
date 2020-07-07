import * as React from 'react';
import { BrochureProps } from './brochure.props';
import * as styles from './brochure.scss';
import { H2, Paragraph } from '@core/components';

/**
 * Renders Brochure
 */
const Brochure: React.FC<BrochureProps> = ({}) => {
  return (
    <div className={styles.brochure}>
      <div
        style={{
          backgroundImage: `url(${require('img/brochure-img.png')})`
        }}
        className={styles.image}
      >
        <div className={styles.content}>
          <H2 className={styles.title}>
            Unique learning. <br /> Unique business impact.
          </H2>
          <Paragraph className={styles.body}>
            Find out more about how we can <br /> collaborate towards your
            future.
          </Paragraph>

          <a
            className={styles.downloadButton}
            href='path_to_file'
            download='proposed_file_name'
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export { Brochure };
