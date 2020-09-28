import { gql, useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPrograms } from '@app/redux/programs';
import { State } from '@app/redux/state';

const useCatalogueProgramsData = (categoryId: string, skip: number) => {
  const { language } = useSelector((state: State) => state.localization);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getPrograms({
        skip: skip,
        limit: 1,
        category: categoryId,
        locale: language,
        subfilters: 'all'
      })
    );
  }, []);

  const { programs } = useSelector((state: State) => state.programsData);

  const GET_CATEGORY_PROGRAMS = gql`
    query($id: String!) {
      onlineCourseCollection(where: { category: { sys: { id: $id } } }) {
        items {
          name
          slug
          videoVimeoUrl
          description
          languages
          complexityLevel
          price
          weeks
          sprints
          subfilters
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

  const { data, loading, error } = useQuery(GET_CATEGORY_PROGRAMS, {
    variables: { id: categoryId }
  });

  return {
    catalogueProgramsData: data?.onlineCourseCollection?.items,
    catalogueProgramsLoading: loading,
    programs
  };
};

export { useCatalogueProgramsData };
