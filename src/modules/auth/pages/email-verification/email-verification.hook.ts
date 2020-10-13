import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyEmail } from '@app/redux/auth';
import { State } from '@app/redux/state';
import { useHistory } from 'react-router';
import { parse } from 'query-string';

const useEmailVerificationData = () => {
  const dispatch = useDispatch();
  const { emailVerified, authorized } = useSelector(
    (state: State) => state.auth
  );
  const history = useHistory();
  const {
    location: { search }
  } = history;
  const { token, isNewEmail } = parse(search);
  debugger;
  useEffect(() => {
    dispatch(verifyEmail({ token, isNewEmail: Boolean(isNewEmail || false) }));
  }, []);

  return { emailVerified, token, authorized, isNewEmail: isNewEmail || false };
};

export { useEmailVerificationData };
