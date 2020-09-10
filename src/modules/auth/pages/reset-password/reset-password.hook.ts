import { useHistory } from 'react-router';
import { parse } from 'query-string';

const useResetPasswordData = () => {
  const history = useHistory();
  const {
    location: { search }
  } = history;
  const { token } = parse(search);

  return { token };
};

export { useResetPasswordData };
