import * as React from 'react';
import { ContributorsProps } from './contributors.props';
import * as styles from './contributors.scss';
import { Header } from '@core/components/header';
import { Button, Footer } from '@core/components';
import { ContributorsContainer, BecomeContributing } from './sections';
/**
 * Renders Contributors
 */
const Contributors: React.FC<ContributorsProps> = ({}) => {
  return (
    <div className={styles.contributors}>
      <div className={styles.overlay} />
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Header />
        </nav>
        <div
          style={{
            backgroundImage: `url(${require('img/contributors/contributors-1.png')})`
          }}
          className={styles.headerImg}
        />
        <div className={styles.headerContent}>
          <div>
            Programs <br /> Mentors & Co-authors
          </div>
          <div>
            Our faculty members are internationally recognised hospitality
            leaders whom we are proud to work with.
          </div>
          <Button className={styles.headerBtn}>
            <div>Contact us</div> <div>&#8594;</div>
          </Button>
        </div>
        <div className={styles.headerScroll}>&#8595; Scroll</div>
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
