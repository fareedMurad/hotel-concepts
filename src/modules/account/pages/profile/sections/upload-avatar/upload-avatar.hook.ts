import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';

const useUploadAvatarData = () => {
  const { user } = useSelector((state: State) => state.auth);
  const isAvatarSource = user?.avatar?.length > 0;

  return {
    isAvatarSource,
    avatarData: {
      name: user?.name,
      surname: user?.surname,
      avatar: user?.avatar
    }
  };
};

export { useUploadAvatarData };
