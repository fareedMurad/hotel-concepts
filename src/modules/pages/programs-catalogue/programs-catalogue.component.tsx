import { ScrollToTop } from '@app';
import { Preloader, SectionTitle } from '@core/components';
import { Pagination } from '@core/components/pagination';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { Preloaders } from '@ui/models';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ProgramItem } from './components';
import { useProgramsCatalogueData } from './programs-catalogue.hook';
import * as styles from './programs-catalogue.scss';
import { CatalogueFilters } from './sections/catalogue-filters';
import { CatalogueHeader } from './sections/catalogue-header';
import { ProgramsContactUs } from './sections/programs-contact-us';

/**
 * Renders ProgramsCatalogue
 */
const ProgramsCatalogue: React.FC = () => {
  const { t } = useTranslation();
  const {
    id,
    filters,
    programs,
    totalPages,
    currentPage,
    itemsPerPage,
    currentFilters,
    setCurrentPage,
    selectedCategory,
    setCurrentFilters
  } = useProgramsCatalogueData();
  const { category } = selectedCategory || {};
  const { name, description, isSubfiltersAllowed } = category || {};

  const changePage = page => () => {
    setCurrentPage(page);
    scrollTo('programs');
  };

  const updateFilters = (filter: string) => {
    setCurrentFilters(prevFilters =>
      prevFilters.includes(filter)
        ? prevFilters.filter(el => el !== filter)
        : [...prevFilters, filter]
    );
    setCurrentPage(1);
  };

  return (
    <div className={styles.programsCatalogue}>
      <ScrollToTop />
      <Preloader id={Preloaders.categories}>
        <CatalogueHeader title={name} description={description} />
        <div className={styles.title}>
          <SectionTitle>{t('programs-catalogue.title')}</SectionTitle>
          <div>{t('programs-catalogue.sub-title')}</div>
        </div>
        {isSubfiltersAllowed && (
          <CatalogueFilters
            filters={filters}
            currentFilters={currentFilters}
            updateFilters={updateFilters}
          />
        )}

        <div className={styles.content} id='programs'>
          {programs.length > 0 ? (
            programs.map((program, index) => (
              <ProgramItem program={program} key={index} />
            ))
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
              countOfPages={totalPages}
              onChangePage={changePage}
            />
          </div>
        )}
        <ProgramsContactUs reduceMargin />
      </Preloader>
    </div>
  );
};

export { ProgramsCatalogue };
