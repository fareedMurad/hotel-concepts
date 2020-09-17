import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

const useRegisterData = () => {
  const { authorized } = useSelector((state: State) => state.auth);

  return { authorized };
};

export { useRegisterData };
