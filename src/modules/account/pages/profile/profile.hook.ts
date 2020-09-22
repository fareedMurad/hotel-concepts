import { ProfileValues } from '@account/models';
import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';

const useProfileData = () => {
  const {
    auth: { user }
  } = useSelector((state: State) => state);

  /**
   * Default values
   */
  const defaultValues: ProfileValues = {
    position: '',
    email: '',
    title: '',
    name: '',
    surname: '',
    company: '',
    job: '',
    city: '',
    country: '',
    phone: ''
  };

  const isUser = Object.keys(user || {}).length > 0;

  return {
    user,
    defaultValues: isUser ? Object.assign(defaultValues) : defaultValues
  };
};

export { useProfileData };
