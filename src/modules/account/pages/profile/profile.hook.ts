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
    position: user.position || 'Hospitality professional',
    email: user.email,
    title: user.title,
    name: user.name,
    surname: user.surname,
    company: user.company ? user.company : '',
    job: user.job ? user.job : '',
    city: user.city ? user.city : '',
    country: user.country ? user.country : '',
    phone: user.phone ? user.phone : ''
  };

  const isUser = Object.keys(user || {}).length > 0;

  return {
    user,
    defaultValues: isUser ? Object.assign(defaultValues) : defaultValues
  };
};

export { useProfileData };
