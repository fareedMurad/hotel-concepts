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
import { Preloaders } from '@ui/models';
import { usePaginationCalculation } from './pagination.hook';

/**
 * Renders ProgramsCatalogue
 */

const ProgramsCatalogue: React.FC<ProgramsCatalogueProps> = ({}) => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { selectedCategory } = useCatalogueInfoData(id);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(6);
  const [currentFilter, setCurrentFilter] = React.useState('All');
  const skipCourses = itemsPerPage * (currentPage - 1);

  const { programs, programsTotal } = useCatalogueProgramsData(
    id,
    skipCourses,
    currentFilter
  );

  const { pages } = usePaginationCalculation({
    total: programsTotal,
    itemsPerPage: itemsPerPage,
    currentPagination: currentPage
  });

  const changePage = page => () => {
    setCurrentPage(page);
    scrollTo('programs');
  };

  const updateFilters = filter => {
    setCurrentFilter(filter);
  };

  return (
    <React.Fragment>
      <ScrollToTop />
      <Preloader id={Preloaders.categories}>
        <div className={styles.programsCatalogue}>
          <CatalogueHeader
            title={selectedCategory?.category.name}
            description={selectedCategory?.category.description}
          />
          <div className={styles.title}>
            <SectionTitle>{t('programs-catalogue.title')}</SectionTitle>
            <div>{t('programs-catalogue.sub-title')}</div>
          </div>
          {selectedCategory?.category.isSubfiltersAllowed && (
            <CatalogueFilters
              currentFilter={currentFilter}
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

          {(programs.length >= itemsPerPage || currentPage > 1) && (
            <div className={styles.pagination}>
              <Pagination
                currentPage={currentPage}
                countOfPages={pages}
                onChangePage={changePage}
              />
            </div>
          )}
          <ProgramsContactUs reduceMargin={true} />
        </div>
      </Preloader>
    </React.Fragment>
  );
};

export { ProgramsCatalogue };
