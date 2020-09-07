import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';
import { useEffect } from 'react';

const useProfileData = () => {
  const {} = useSelector((state: State) => state.account);

  useEffect(() => {}, []);

  return {};
};

export { useProfileData };
