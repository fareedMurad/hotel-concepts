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

  // const fetchPrograms = item => {
  //   const params = {
  //     category: item.category.id,
  //     limit: 3,
  //     skip: 0,
  //     locale: language,
  //     subfilters: OnlineCourseSubfilter.all
  //   };
  //   dispatch(selectCategory(item));
  //   dispatch(getPrograms(params));
  // };

  const fetchPrograms = [
    {
      name: 'Developing Winning and Compelling Hotel Concepts',
      sprints: 9,
      description:
        'A practical, hands-on course for hoteliers aiming to boost their hotel’s perceived value, reach a more qualitative audience and increase direct reservations',
      courseImage: {
        file: { url: 1 }
      }
    },
    {
      name: 'Developing Winning and Compelling Hotel Concepts',
      sprints: 9,
      description:
        'A practical, hands-on course for hoteliers aiming to boost their hotel’s perceived value, reach a more qualitative audience and increase direct reservations',
      courseImage: {
        file: { url: 2 }
      }
    },
    {
      name: 'Developing Winning and Compelling Hotel Concepts',
      sprints: 9,
      description:
        'A practical, hands-on course for hoteliers aiming to boost their hotel’s perceived value, reach a more qualitative audience and increase direct reservations',
      courseImage: {
        file: { url: 3 }
      }
    },
    {
      name: 'Developing Winning and Compelling Hotel Concepts',
      sprints: 9,
      description:
        'A practical, hands-on course for hoteliers aiming to boost their hotel’s perceived value, reach a more qualitative audience and increase direct reservations',
      courseImage: {
        file: { url: 4 }
      }
    }
  ];
  return {
    fetchPrograms
  };
};

export { useProgramsData };
