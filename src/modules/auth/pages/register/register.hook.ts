import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

const useRegisterData = () => {
  const { registered } = useSelector((state: State) => state.auth);

  return { registered };
};

export { useRegisterData };
