import * as React from 'react';
import { ProgramsCatalogueProps } from './programs-catalogue.props';
import * as styles from './programs-catalogue.scss';
import { CatalogueHeader } from './sections/catalogue-header';
import { CatalogueFilters } from './sections/catalogue-filters';
import { ProgramsContactUs } from './sections/programs-contact-us';
import { Header } from '@core/components/header';
import { ProgramItem } from './components/program-item';
import { Footer } from '@core/components';
import { useParams } from 'react-router';
import { Pagination } from '@core/components/pagination';
import { useProgramsCatalogueData } from './programs-catalogue.hook';
import { useCatalogueFiltersData } from './sections/catalogue-filters/catalogue-filters.hook';
import { gql, useQuery } from '@apollo/client';
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
const ProgramsCatalogue: React.FC<ProgramsCatalogueProps> = ({}) => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_PROGRAMS, {
    variables: { id: id }
  });

  if (loading) return <div> loadig ...</div>;
  console.log(data);
  const { items: programs } = data.courseCategory.coursesCollection;
  const { courseCategory: category } = data;
  console.log(programs);
  // const { data } = useProgramsCatalogueData();
  // const { slug } = useParams();
  // const filterTypes = useCatalogueFiltersData();
  // const [currentFilters, setCurrentFilters] = React.useState([0]);
  // const { programs, title, description } = data.filter(
  //   item => item.slug == slug
  // )[0];
  // const [currentPage, setCurrentPage] = React.useState(1);
  // const [itemsPerPage, setItemsPerPage] = React.useState(5);
  // const lastItemIndex = currentPage * itemsPerPage;
  // const firstItemIndex = lastItemIndex - itemsPerPage;
  // const currentPrograms = programs.slice(firstItemIndex, lastItemIndex);
  // const [filteredPrograms, setFilteredPrograms] = React.useState([
  //   ...currentPrograms
  // ]);
  // const pages = Math.ceil(programs.length / itemsPerPage);

  // const changePage = page => () => {
  //   setCurrentPage(page);
  // };

  // const updateFilters = filters => {
  //   setCurrentFilters(filters);
  // };

  // React.useEffect(() => {
  //   setFilteredPrograms([...currentPrograms]);
  //   setCurrentPage(1);
  //   setCurrentFilters([0]);
  // }, [slug]);

  // React.useEffect(() => {
  //   const filters = currentFilters.map(index => filterTypes.data[index]);
  //   const result = programs.filter(item => {
  //     if (item) {
  //       return item.filters.some(filter => filters.includes(filter));
  //     }
  //     return false;
  //   });
  //   setFilteredPrograms(result.slice(firstItemIndex, lastItemIndex));
  // }, [ currentPage]);

  return (
    <>
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
        {/* <CatalogueFilters
          currentFilters=''
          updateFilters={updateFilters}
        /> */}
        <div className={styles.content}>
          {programs.length > 0 ? (
            programs.map(item => {
              const {
                duration: { months, sprints }
              } = item;
              const {
                courseImage: { url }
              } = item;
              return (
                <ProgramItem
                  key={item.sys.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  type={item.type}
                  img={url}
                  weeks={months}
                  sprints={sprints}
                  price={item.price}
                  category={item.courseType}
                />
              );
            })
          ) : (
            <div className={styles.emptyInfo}>
              There are no programs with these filters
            </div>
          )}
        </div>
        {/* {(filteredPrograms.length >= itemsPerPage || currentPage > 1) && (
          <div className={styles.pagination}>
            <Pagination
              currentPage={currentPage}
              countOfPages={pages}
              onChangePage={changePage}
            />
          </div>
        )} */}
        <ProgramsContactUs />
      </div>
      <Footer />
    </>
  );
};

export { ProgramsCatalogue };
