import { useSelector, useDispatch } from 'react-redux';
import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { fetchProfile } from '@app/redux/account';

const useProfileData = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state: State) => state.account);

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  return { profile };
};

export { useProfileData };
