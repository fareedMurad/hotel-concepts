import { useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

const useJobDetailsData = () => {
  const route = useRouteMatch();
  //   const { id } = route.params;
  //   const { jobDetails } = useSelector((state: State) => state.jobs);
  //   useEffect(() => {
  //     dispatch(action(id));
  //   }, []);

  //   return { jobDetails };
  const locations = [
    {
      id: '1',
      location: 'Ukraine',
      label: 'Ukraine',
      value: 'Ukraine'
    },
    {
      id: '2',
      location: 'Spain',
      label: 'Spain',
      value: 'Spain'
    },
    {
      id: '3',
      location: 'USA',
      label: 'USA',
      value: 'USA'
    }
  ];
  return { locations };
};

export { useJobDetailsData };
