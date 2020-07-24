import * as React from 'react';
import { ProgramsCatalogueProps } from './programs-catalogue.props';
import * as styles from './programs-catalogue.scss';
import { CatalogueHeader } from './sections/catalogue-header';
import { CatalogueFilters } from './sections/catalogue-filters';
import { ProgramsContactUs } from './sections/programs-contact-us';
import { Header } from '@core/components/header';
import { ProgramItem } from './components/program-item';
import { Footer, Spinner } from '@core/components';
import { useParams } from 'react-router';
import { Pagination } from '@core/components/pagination';
import { gql, useQuery } from '@apollo/client';
import { ScrollToTop } from '@app';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useProgramsCatalogueData } from './programs-catalogue.hook';

/**
 * Renders ProgramsCatalogue
 */

const ProgramsCatalogue: React.FC<ProgramsCatalogueProps> = ({}) => {
  const { id } = useParams();
  const { courseCategory, loading } = useProgramsCatalogueData(id);
  const [currentFilters, setCurrentFilters] = React.useState(['All']);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  if (loading) return <Spinner />;

  console.log(courseCategory);

  // const { items: programs } = data?.courseCategory?.coursesCollection;
  // const { courseCategory: category } = data;
  // const lastItemIndex = currentPage * itemsPerPage;
  // const firstItemIndex = lastItemIndex - itemsPerPage;
  // const pages = Math.ceil(programs.length / itemsPerPage);

  // const changePage = page => () => {
  //   setCurrentPage(page);
  //   scrollTo('programs');
  // };

  const updateFilters = filters => {
    setCurrentFilters(filters);
  };

  // const filteredPrograms = programs.filter(program => {
  //   return program.filters.some(item => currentFilters.includes(item));
  // });

  // const currentPrograms = filteredPrograms.slice(firstItemIndex, lastItemIndex);
  if (loading) return <Spinner />;

  return (
    <React.Fragment>
      <ScrollToTop />
      <Header />
      <div className={styles.programsCatalogue}>
        <CatalogueHeader
          title={courseCategory.name}
          description={courseCategory.description}
        />
        <div className={styles.title}>
          <div>Find the right course for you</div>
          <div>
            Choose from our growing range of online courses to meet your
            professional goals.
          </div>
        </div>
        <CatalogueFilters
          currentFilters={currentFilters}
          updateFilters={updateFilters}
        />
        {/* <div className={styles.content} id='programs'>
          {currentPrograms.length > 0 ? (
            currentPrograms.map((program, index) => {
              return <ProgramItem program={program} key={index} />;
            })
          ) : (
              <div className={styles.emptyInfo}>
                There are no programs with these filters
              </div>
            )}
        </div>
        {(filteredPrograms.length >= itemsPerPage || currentPage > 1) && (
          <div className={styles.pagination}>
            <Pagination
              currentPage={currentPage}
              countOfPages={pages}
              onChangePage={changePage}
            />
          </div>
        )}
        <ProgramsContactUs /> */}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export { ProgramsCatalogue };
