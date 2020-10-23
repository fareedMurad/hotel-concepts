import { UserSource } from '@app/models/enum';
import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';
import { UpdatePasswordModel } from '../../models';

const useUpdatePasswordData = () => {
  const { user } = useSelector((state: State) => state.auth);

  /**
   * Default values
   */
  const defaultValues: UpdatePasswordModel = {
    email: user?.email || '',
    newPassword: '',
    newPasswordConfirm: ''
  };

  const isInternalSource = user?.source == UserSource.internal;

  return { isInternalSource, defaultValues, source: user?.source };
};

export { useUpdatePasswordData };
