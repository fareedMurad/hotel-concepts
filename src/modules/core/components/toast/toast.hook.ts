import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { State } from '@app/redux/state';

const useToastData = () => {
  const { toastData } = useSelector((state: State) => state.ui.toast);
  const { status, title, description } = toastData;

  return { status, description };
};

export { useToastData };
