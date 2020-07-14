import * as React from 'react';
import { BrochureProps } from './brochure.props';
import * as styles from './brochure.scss';
import { H2, Paragraph } from '@core/components';
import { DownloadButton } from '@pages/components';

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
          <div className={styles.downloadButton}>
            <a href='http://www.africau.edu/images/default/sample.pdf' download>
              <DownloadButton caption='Brochure' filetype='PDF' size='15mb' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Brochure };
