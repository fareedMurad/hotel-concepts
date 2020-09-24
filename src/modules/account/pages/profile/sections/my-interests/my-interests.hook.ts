import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';

const useMyInterestsData = () => {
  const { user } = useSelector((state: State) => state.auth);

  return { user };
};

export { useMyInterestsData };
