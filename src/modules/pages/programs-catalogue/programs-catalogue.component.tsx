import * as React from 'react';
import { ProgramsCatalogueProps } from './programs-catalogue.props';
import * as styles from './programs-catalogue.scss';
import { CatalogueHeader } from './sections/catalogue-header';
import { CatalogueFilters } from './sections/catalogue-filters';
import { ProgramsContactUs } from './sections/programs-contact-us';
import { Header } from '@core/components/header';
import { ProgramItem } from './components';
import { Footer, Spinner, SectionTitle } from '@core/components';
import { useParams } from 'react-router';
import { Pagination } from '@core/components/pagination';
import { ScrollToTop } from '@app';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useCatalogueInfoData, useCatalogueProgramsData } from './hooks';

/**
 * Renders ProgramsCatalogue
 */

const ProgramsCatalogue: React.FC<ProgramsCatalogueProps> = ({}) => {
  const { id } = useParams();
  const { catalogueInfoData, catalogueInfoLoading } = useCatalogueInfoData(id);
  const {
    catalogueProgramsData,
    catalogueProgramsLoading
  } = useCatalogueProgramsData(id);

  const [currentFilters, setCurrentFilters] = React.useState(['All']);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);

  const usePrevious = value => {
    if (!value) {
      value = 'All';
    }

    let memoized = value;

    React.useEffect(() => {
      memoized = value;
    }, [value]);

    return memoized;
  };

  const usePreviousValue = usePrevious(currentFilters[0]);

  React.useEffect(() => {
    if (usePreviousValue != currentFilters[0]) {
      setCurrentPage(1);
    }
  }, [currentFilters]);

  if (catalogueInfoLoading) return <Spinner />;
  if (catalogueProgramsLoading) return <Spinner />;

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const changePage = page => () => {
    setCurrentPage(page);
    scrollTo('programs');
  };

  const updateFilters = filters => {
    setCurrentFilters(filters);
  };

  const filteredPrograms = catalogueProgramsData.filter(program => {
    if (currentFilters.length > 1) {
      currentFilters.shift();
    }
    return program.subfilters?.some(item => currentFilters.includes(item));
  });

  const isFilterable = catalogueInfoData.isSubfiltersAllowed
    ? filteredPrograms
    : catalogueProgramsData;

  const pages = Math.ceil(isFilterable.length / itemsPerPage);
  const currentPrograms = isFilterable.slice(firstItemIndex, lastItemIndex);

  const reduceMargin = isFilterable.length >= itemsPerPage || currentPage > 1;

  console.log(currentFilters.length);
  console.log(currentFilters);
  console.log(currentPage);
  console.log(usePreviousValue);

  return (
    <React.Fragment>
      <ScrollToTop />
      <Header />
      <div className={styles.programsCatalogue}>
        <CatalogueHeader
          title={catalogueInfoData.name}
          description={catalogueInfoData.description}
        />
        <div className={styles.title}>
          <SectionTitle>Find the right course for you</SectionTitle>
          <div>
            Choose from our growing range of online courses to meet your
            professional goals.
          </div>
        </div>
        {catalogueInfoData.isSubfiltersAllowed && (
          <CatalogueFilters
            currentFilters={currentFilters}
            updateFilters={updateFilters}
          />
        )}
        <div className={styles.content} id='programs'>
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
        <ProgramsContactUs reduceMargin={reduceMargin} />
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export { ProgramsCatalogue };
