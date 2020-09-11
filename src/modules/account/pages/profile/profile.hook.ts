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
    language: '',
    email: '',
    password: '',
    repeatPassword: '',
    title: '',
    name: '',
    surname: '',
    company: '',
    jobTitle: '',
    city: '',
    country: '',
    phone: ''
  };

  const isUser = Object.keys(user || {}).length > 0;

  return {
    user,
    defaultValues: isUser ? Object.assign(defaultValues, user) : defaultValues
  };
};

export { useProfileData };
