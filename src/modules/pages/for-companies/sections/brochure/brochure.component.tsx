import * as React from 'react';
import { BrochureProps } from './brochure.props';
import * as styles from './brochure.scss';
import { H2, Paragraph } from '@core/components';
import { DownloadButton } from '@pages/components';
import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

const GET_HERO_IMAGE = gql`
  {
    asset(id: "2FueaT0TE4alWItwWMFtz6") {
      url
    }
  }
`;

/**
 * Renders Brochure
 */
const Brochure: React.FC<BrochureProps> = ({}) => {
  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  const { t } = useTranslation();
  const {
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);
  const oldSafari = browserName === 'Safari' && browserVersion < '14';

  const imageUrl = oldSafari ? data?.asset?.url : `${data?.asset?.url}?fm=webp`;

  return (
    <div className={styles.brochure}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className={styles.image}
      >
        <div className={styles.content}>
          <H2 className={styles.title}>{t('for-companies.brochure.title')}</H2>
          <Paragraph className={styles.body}>
            {t('for-companies.brochure.description')}
          </Paragraph>
          <div className={styles.downloadButton}>
            {/* <a href='http://www.africau.edu/images/default/sample.pdf' download>
              <DownloadButton caption='Brochure' filetype='PDF' size='15mb' />
            </a> */}
            {/* #non clickable */}
            <div style={{ display: 'inline' }}>
              <DownloadButton caption='Brochure' filetype='PDF' size='15mb' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Brochure };
