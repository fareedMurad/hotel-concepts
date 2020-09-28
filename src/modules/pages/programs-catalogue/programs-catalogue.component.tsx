import * as React from 'react';
import { ProgramsCatalogueProps } from './programs-catalogue.props';
import * as styles from './programs-catalogue.scss';
import { CatalogueHeader } from './sections/catalogue-header';
import { CatalogueFilters } from './sections/catalogue-filters';
import { ProgramsContactUs } from './sections/programs-contact-us';
import { ProgramItem } from './components';
import { Spinner, SectionTitle, Preloader } from '@core/components';
import { useParams } from 'react-router';
import { Pagination } from '@core/components/pagination';
import { ScrollToTop } from '@app';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useCatalogueInfoData, useCatalogueProgramsData } from './hooks';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { Preloaders } from '@ui/models';
import { usePaginationCalculation } from './pagination.hook';

/**
 * Renders ProgramsCatalogue
 */

const ProgramsCatalogue: React.FC<ProgramsCatalogueProps> = ({}) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const {
    catalogueInfoData,
    catalogueInfoLoading,
    selectedCategory
  } = useCatalogueInfoData(id);
  const [skipItems, setSkipItems] = React.useState(0);

  const {
    catalogueProgramsData,
    catalogueProgramsLoading,
    programs
  } = useCatalogueProgramsData(id, skipItems);

  const [currentFilters, setCurrentFilters] = React.useState(['All']);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(1);
  const { skip, pages } = usePaginationCalculation({
    total: 10,
    itemsPerPage: itemsPerPage,
    currentPagination: currentPage
  });

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

  const filteredPrograms = programs.filter(program => {
    if (currentFilters.length > 1) {
      currentFilters.shift();
    }
    return program.subfilters?.some(item => currentFilters.includes(item));
  });

  const isFilterable = catalogueInfoData.isSubfiltersAllowed
    ? filteredPrograms
    : programs;

  const currentPrograms = isFilterable.slice(firstItemIndex, lastItemIndex);

  const reduceMargin = isFilterable.length >= itemsPerPage || currentPage > 1;

  return (
    <React.Fragment>
      <ScrollToTop />
      <Preloader id={Preloaders.categories}>
        <div className={styles.programsCatalogue}>
          <CatalogueHeader
            title={selectedCategory.name}
            description={selectedCategory.description}
          />
          <div className={styles.title}>
            <SectionTitle>{t('programs-catalogue.title')}</SectionTitle>
            <div>{t('programs-catalogue.sub-title')}</div>
          </div>
          {catalogueInfoData.isSubfiltersAllowed && (
            <CatalogueFilters
              currentFilters={currentFilters}
              updateFilters={updateFilters}
            />
          )}
          <div className={styles.content} id='programs'>
            {programs.length > 0 ? (
              programs.map((program, index) => {
                return <ProgramItem program={program} key={index} />;
              })
            ) : (
              <div className={styles.emptyInfo}>
                {t('programs-catalogue.empty-info')}
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
      </Preloader>
    </React.Fragment>
  );
};

export { ProgramsCatalogue };
