import { gql } from '@apollo/client/core';
import { useQuery } from '@apollo/client';

const useOnlineCoursesData = () => {
  // get all filterss
  const GET_FILTERS_CATEGORIES = gql`
    {
      courseCategoryCollection(order: sys_publishedAt_DESC) {
        total
        items {
          sys {
            id
          }
          slug
          category
          description
          coursesCollection(limit: 6) {
            total
          }
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_FILTERS_CATEGORIES);

  // get courses sorted by filters
  const GET_COURSES_BY_FILTER = gql`
    query($courseType: String!) {
      onlineCourseCollection(limit: 6, where: { courseType: $courseType }) {
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

  return {
    categories: data?.courseCategoryCollection?.items,
    loadingFilters: loading,
    total: data?.courseCategoryCollection?.total,
    GET_COURSES_BY_FILTER
  };
};

export { useOnlineCoursesData };
