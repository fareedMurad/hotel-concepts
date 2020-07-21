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
import { useProgramsCatalogueData } from './programs-catalogue.hook';
import { useCatalogueFiltersData } from './sections/catalogue-filters/catalogue-filters.hook';
import { gql, useQuery } from '@apollo/client';
import { ScrollToTop } from '@app';
/**
 * get programs
 */

const GET_PROGRAMS = gql`
  query($id: String!) {
    courseCategory(id: $id) {
      ... on CourseCategory {
        category
        description
      }
      coursesCollection {
        items {
          ... on OnlineCourse {
            name
            courseType
            type
            description
            price
            duration
            slug
            sys {
              id
            }
            courseImage {
              ... on Asset {
                url
              }
            }
          }
        }
      }
    }
  }
`;
/**
 * Renders ProgramsCatalogue
 */
const ProgramsCatalogue: React.FC<ProgramsCatalogueProps> = ({ }) => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_PROGRAMS, {
    variables: { id: id }
  });
  const [programs, setPrograms] = React.useState([])
  React.useEffect(() => {
    if (!loading) {
      setPrograms(data.courseCategory.coursesCollection.items)
    }
  })

  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentPrograms = programs.slice(firstItemIndex, lastItemIndex);
  const [filteredContributors, setFilteredContributors] = React.useState([...currentPrograms]);
  const pages = Math.ceil(programs.length / itemsPerPage)

  const changePage = page => () => {
    setCurrentPage(page);
  };

  if (loading) return <Spinner />;

  const { courseCategory: category } = data;


  return (
    <React.Fragment>
      <ScrollToTop />
      <Header />
      <div className={styles.programsCatalogue}>
        <CatalogueHeader
          title={category.category}
          description={category.description}
        />
        <div className={styles.title}>
          <div>Find the right course for you</div>
          <div>
            Choose from our growing range of online courses to meet your
            professional goals.
          </div>
        </div>
        <CatalogueFilters currentFilters={[0]} updateFilters={() => [0, 2]} />
        <div className={styles.content}>
          {programs.length > 0 ? (
            currentPrograms.map(item => {
              const {
                slug,
                duration: { weeks, sprints },
                courseImage: { url }
              } = item;
              return (
                <ProgramItem
                  key={item.sys.id}
                  id={item.sys.id}
                  name={item.name}
                  description={item.description}
                  type={item.type}
                  img={url}
                  weeks={weeks}
                  sprints={sprints}
                  price={item.price}
                  category={item.courseType}
                  slug={item.slug}
                />
              );
            })
          ) : (
              <div className={styles.emptyInfo}>
                There are no programs with these filters
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
        <ProgramsContactUs />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export { ProgramsCatalogue };
