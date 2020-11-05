import { OnlineCourseSubfilter } from '@app/models/enum';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategory,
  getPrograms,
  getCategories
} from '@app/redux/programs';
import { useEffect } from 'react';
import { State } from '@app/redux/state';

const useProgramsData = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state: State) => state.localization);

  useEffect(() => {
    dispatch(getCategories(language));
  }, []);

  const fetchPrograms = item => {
    const params = {
      category: item.category.id,
      limit: 3,
      skip: 0,
      locale: language,
      subfilters: OnlineCourseSubfilter.all
    };
    dispatch(selectCategory(item));
    dispatch(getPrograms(params));
  };
  return {
    fetchPrograms
  };
};

export { useProgramsData };
