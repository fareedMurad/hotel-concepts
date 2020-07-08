import * as React from 'react';
import { HomepageProps } from './homepage.props';
import * as styles from './homepage.scss';
import { Intro } from './sections/intro';
import { SupportInfo } from './support-info';

/**
 * Renders Homepage
 */
const Homepage: React.FC<HomepageProps> = ({}) => {
  return (
    <div className={styles.homepage}>
      <Intro />
      <SupportInfo />
    </div>
  );
};

export { Homepage };
