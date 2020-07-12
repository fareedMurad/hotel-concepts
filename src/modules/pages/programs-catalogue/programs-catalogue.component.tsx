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
import { useParams } from 'react-router';
import { Pagination } from '@core/components/pagination';

/**
 * Renders ProgramsCatalogue
 */
const ProgramsCatalogue: React.FC<ProgramsCatalogueProps> = ({}) => {
  const { data } = useOnlineCoursesData();
  const slug = useParams();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const programs = data.slice(firstItemIndex, lastItemIndex);
  const pages = Math.ceil(data.length/itemsPerPage);

  const changePage = page => () => {
    setCurrentPage(page);
  }

  const onUpdateFilters = data => () => {
    console.log('test');
  }

  return (
    <>
      <Header />
      <div className={styles.programsCatalogue}>
        <CatalogueHeader />
        <div className={styles.title}>
          <div>Find the right course for you</div>
          <div>Choose from our growing range of online courses to meet your professional goals.</div>
        </div>
        <CatalogueFilters updateFiltersArray={onUpdateFilters} />
        <div className={styles.content}>
          {programs.map(item => (
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
        {data.length >= itemsPerPage &&
          <Pagination currentPage={currentPage} countOfPages={pages} onChangePage={changePage} />}
        <ProgramsContactUs />
      </div>
      <Footer />
    </>
  );
};

export { ProgramsCatalogue };
