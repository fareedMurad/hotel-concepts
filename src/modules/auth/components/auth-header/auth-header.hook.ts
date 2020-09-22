import { useHistory } from 'react-router';

const useAuthHeaderData = () => {
  const {
    location: { pathname }
  } = useHistory();

  const isLogin = pathname == '/auth/login';

  return { isLogin };
};

export { useAuthHeaderData };
