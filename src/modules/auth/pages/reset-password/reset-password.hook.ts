import { useHistory } from 'react-router';
import { parse } from 'query-string';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

const useResetPasswordData = () => {
  const { passwordRecoverySent } = useSelector((state: State) => state.auth);
  const history = useHistory();
  const {
    location: { search }
  } = history;
  const { token } = parse(search);

  return { token, passwordRecoverySent };
};

export { useResetPasswordData };
