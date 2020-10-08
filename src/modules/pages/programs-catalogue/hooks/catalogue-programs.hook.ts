import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPrograms } from '@app/redux/programs';
import { State } from '@app/redux/state';
import { OnlineCourseSubfilter } from '@app/models/enum';

const useCatalogueProgramsData = (
  categoryId: string,
  skip: number,
  subfilter: string
) => {
  const { language } = useSelector((state: State) => state.localization);
  const dispatch = useDispatch();

  // const subfilterEnum = () => {
  // for (let key in OnlineCourseSubfilter) {
  //     return (
  //       key &&
  //       subfilter
  //         .toLowerCase()
  //         .split(' ')
  //         .join('')
  //     );
  //   }
  // };
  if (subfilter === 'All programs') {
    subfilter = 'all';
  }

  useEffect(() => {
    dispatch(
      getPrograms({
        skip: skip,
        limit: 6,
        category: categoryId,
        locale: language,
        subfilters: subfilter || 'all'
      })
    );
  }, [skip, subfilter]);

  const { programs, programsTotal } = useSelector(
    (state: State) => state.programsData
  );

  return {
    programs,
    programsTotal
  };
};

export { useCatalogueProgramsData };
