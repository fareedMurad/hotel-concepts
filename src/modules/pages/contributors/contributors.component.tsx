import * as React from 'react';
import { ContributorsProps } from './contributors.props';
import * as styles from './contributors.scss';
import { Header } from '@core/components/header';
import { Button, Footer } from '@core/components';
import { ContributorsContainer, BecomeContributing } from './sections';
import { ScrollButton } from '@core/components/scroll-button';
import { scrollTo } from '@core/helpers/scroll-to.helper';

/**
 * Renders Contributors
 */

const Contributors: React.FC<ContributorsProps> = ({}) => {
  const ScrollToEnroll = () => scrollTo('become-contributor');
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.contributors}>
      <header className={styles.header}>
        <Header />
        <div
          style={{
            backgroundImage: `url(${require('img/contributors/contributors-1.png')})`
          }}
          className={styles.headerImg}
        >
          <div className={styles.headerContent}>
            <div>
              Programs <br /> Mentors & Co-authors
            </div>
            <div>
              Our faculty members are internationally recognised hospitality
              leaders whom we are proud to work with.
            </div>
            <Button className={styles.headerBtn} onClick={ScrollToEnroll}>
              <div>Contact us</div> <div>&#8594;</div>
            </Button>
          </div>
          <ScrollButton text='Scroll' className={styles.headerScroll} />
        </div>
      </header>
      <main>
        <ContributorsContainer />
        <BecomeContributing />
        <Footer />
      </main>
    </div>
  );
};

export { Contributors };
