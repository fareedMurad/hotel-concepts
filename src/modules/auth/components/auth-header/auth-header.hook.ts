import { useHistory } from 'react-router';

const useAuthHeaderData = () => {
  const {
    location: { pathname }
  } = useHistory();

  const isLogin: 'login' | 'register' =
    pathname == '/auth/login' ? 'login' : 'register';

  return { isLogin };
};

export { useAuthHeaderData };
