import { useEffect } from 'react';
import { useRouteMatch } from 'react-router';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';

const useJobDetailsData = () => {
  const route = useRouteMatch();
  //   const { id } = route.params;
  //   const { jobDetails } = useSelector((state: State) => state.jobs);
  //   useEffect(() => {
  //     dispatch(action(id));
  //   }, []);

  //   return { jobDetails };
};

export { useJobDetailsData };
