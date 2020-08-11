import * as React from 'react';
import { ContributorsProps } from './contributors.props';
import * as styles from './contributors.scss';
import { Header } from '@core/components/header';
import { Button, Footer, HeroTitle, HeroSubtitle } from '@core/components';
import { ContributorsContainer, BecomeContributing } from './sections';
import { ScrollButton } from '@core/components/scroll-button';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useContributorsData } from './contributor.hook';

/**
 * Renders Contributors
 */

const Contributors: React.FC<ContributorsProps> = ({}) => {
  const ScrollToEnroll = () => scrollTo('become-contributor');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const { contributorsHeroImage } = useContributorsData();

  return (
    <div className={styles.contributors}>
      <header className={styles.header}>
        <Header />
        <div
          style={{
            backgroundImage: `url(${contributorsHeroImage})`
          }}
          className={styles.headerImg}
        >
          <div className={styles.headerContent}>
            <HeroTitle>
              Programs <br /> Mentors & Co-authors
            </HeroTitle>
            <HeroSubtitle>
              Our faculty members are internationally recognised <br />{' '}
              hospitality leaders whom we are proud to work with.
            </HeroSubtitle>
            <Button
              className={styles.headerBtn}
              onClick={ScrollToEnroll}
              children='Contact us'
              arrow='&#8594;'
              width={230}
            />
          </div>
          <ScrollButton text='Scroll' className={styles.headerScroll} />
        </div>
      </header>
      <main>
        <ContributorsContainer />
        <BecomeContributing />
        {/* <Footer /> */}
      </main>
    </div>
  );
};

export { Contributors };
