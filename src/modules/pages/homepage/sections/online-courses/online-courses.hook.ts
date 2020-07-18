import { gql } from '@apollo/client/core';
import { useQuery, useLazyQuery } from '@apollo/client';

const useCoursesCategoriesData = () => {
  const GET_COURSES_CATEGORIES = gql`
    {
      courseCategoryCollection {
        total
        items {
          sys {
            id
          }
          category
          coursesCollection(limit: 6) {
            total
          }
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_COURSES_CATEGORIES);

  return {
    categories: data?.courseCategoryCollection?.items,
    loading,
    total: data?.courseCategoryCollection?.total
  };
};

const useCoursesData = () => {
  const GET_COURSES_CATEGORIES = gql`
    {
      onlineCourseCollection(limit: 6) {
        items {
          name
          duration
          description
          price
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
  `;
  const { data, loading, error } = useQuery(GET_COURSES_CATEGORIES);

  return {
    allCourses: data?.onlineCourseCollection?.items,
    loading,
    total: data?.onlineCourseCollection?.total
  };
};

export { useCoursesCategoriesData };
export { useCoursesData };
