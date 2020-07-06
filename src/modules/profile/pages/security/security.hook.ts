import { useSelector, useDispatch } from 'react-redux';
import { State } from '@app/store/state';
import { useEffect } from 'react';
import { SecurityInfoModel } from '@profile/models';
import { getSecurityInfo } from '@profile/store';

const useSecurityData = () => {
  const dispatch = useDispatch();
  const { securityInfo } = useSelector((state: State) => state.profile);

  const defaultValues: SecurityInfoModel = {
    email: ''
  };

  useEffect(() => {
    dispatch(getSecurityInfo());
  }, []);

  return {
    defaultValues: securityInfo ? securityInfo : defaultValues
  };
};

export { useSecurityData };
