import { gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client';

const useOnlineCoursesData = () => {
  // get all filterss
  const GET_CATEGORIES = gql`
    {
      courseCategoryCollection {
        items {
          sys {
            id
          }
          name
          description
          linkedFrom {
            onlineCourseCollection {
              total
            }
          }
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  return {
    categories: data?.courseCategoryCollection?.items,
    loadingFilters: loading
  };
};

const useFilteredCourses = (category: string) => {
  const GET_CATEGORIES = gql`
    query($category: String!) {
      onlineCourseCollection(where: { category: { name: $category } }) {
        total
        items {
          name
          price
          weeks
          sprints
          slug
          description
          category {
            sys {
              id
            }
          }
          courseImage {
            url
          }
          sys {
            id
          }
        }
      }
    }
  `;

  const { data, loading } = useQuery(GET_CATEGORIES, {
    variables: { category: category }
  });
  return {
    courses: data?.onlineCourseCollection?.items,
    coursesLoading: loading
  };
};

export { useOnlineCoursesData, useFilteredCourses };
