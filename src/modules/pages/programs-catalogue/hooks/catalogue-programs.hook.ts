import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPrograms } from '@app/redux/programs';
import { State } from '@app/redux/state';

const useCatalogueProgramsData = (
  categoryId: string,
  skip: number
  // subfilter: string
) => {
  const { language } = useSelector((state: State) => state.localization);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getPrograms({
        skip: skip,
        limit: 6,
        category: categoryId,
        locale: language,
        subfilters: 'all'
      })
    );
  }, [skip]);

  const { programs, programsTotal } = useSelector(
    (state: State) => state.programsData
  );

  return {
    programs,
    programsTotal
  };
};

export { useCatalogueProgramsData };
