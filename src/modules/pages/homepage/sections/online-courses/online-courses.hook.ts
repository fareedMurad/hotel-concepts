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
            items {
              ... on OnlineCourse {
                slug
                name
                description
                duration
                price
                courseImage {
                  ... on Asset {
                    url
                  }
                }
                sys {
                  id
                }
              }
            }
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

export { useCoursesCategoriesData };
