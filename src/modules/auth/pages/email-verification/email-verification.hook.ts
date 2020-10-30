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

  useEffect(() => {
    const newEmailBoolean = isNewEmail === 'true';
    dispatch(verifyEmail({ token, isNewEmail: newEmailBoolean }));
  }, []);

  return { emailVerified, authorized };
};

export { useEmailVerificationData };
