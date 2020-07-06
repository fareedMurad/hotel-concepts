import { State } from '@app/store/state';
import { useSelector, useDispatch } from 'react-redux';
import { UserInfoModel } from '@profile/models';
import { useEffect } from 'react';
import { getUserInfo } from '@profile/store';

const useUserInfoData = () => {
  const { userInfo } = useSelector((state: State) => state.profile);
  const dispatch = useDispatch();

  const defaultValues: UserInfoModel = {
    name: '',
    surname: ''
  };

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return {
    defaultValues: userInfo ? userInfo : defaultValues
  };
};

export { useUserInfoData };
