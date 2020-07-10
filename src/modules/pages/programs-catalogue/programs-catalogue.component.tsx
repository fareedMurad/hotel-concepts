import * as React from 'react';
import { ProgramsCatalogueProps } from './programs-catalogue.props';
import * as styles from './programs-catalogue.scss';
import { CatalogueHeader } from './sections/catalogue-header';
import { CatalogueFilters } from './sections/catalogue-filters';
import { ProgramsContactUs } from './sections/programs-contact-us';
import { useOnlineCoursesData } from '@pages/homepage/sections/online-courses/online-courses.hook';
import { Header } from '@core/components/header';
import { ProgramItem } from './components/program-item';
import { Footer } from '@core/components';

/**
 * Renders ProgramsCatalogue
 */
const ProgramsCatalogue: React.FC<ProgramsCatalogueProps> = ({}) => {
  const { data } = useOnlineCoursesData();
  return (
    <>
      <Header />
      <div className={styles.programsCatalogue}>
        <CatalogueHeader />
        <div className={styles.title}>
          <div>Find the right course for you</div>
          <div>Choose from our growing range of online courses to meet your professional goals.</div>
        </div>
        <CatalogueFilters />
        <div className={styles.content}>
          {data.map(item => (
            <ProgramItem
              key={item.id}
              name={item.name}
              description={item.description}
              type={item.type}
              img={item.img}
              weeks={item.weeks}
              sprints={item.sprints}
              price={item.price}
              category={item.category}
            />
          ))}
        </div>
        <ProgramsContactUs />
      </div>
      <Footer />
    </>
  );
};

export { ProgramsCatalogue };
