import { Title } from '@app/models/enum';
import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';
import { ContactAddressModel } from '../../models';

const useContactAdressData = () => {
  const { user } = useSelector((state: State) => state.auth);

  /**
   * Default values
   */
  const defaultValues: ContactAddressModel = {
    title: '',
    name: '',
    surname: '',
    position: '',
    company: '',
    job: '',
    city: '',
    country: '',
    phone: ''
  };

  const isUser = Object.keys(user || {}).length > 0;

  /**
   * Radio title data
   */
  const titleData = [
    { value: Title.ms, label: Title.ms },
    { value: Title.mr, label: Title.mr }
  ];

  /**
   * Radio position data
   */
  const positionData = [
    { value: 'hospitalityProfessional', label: 'Hospitality professional' },
    { value: 'hospitalityProfessional', label: 'Hospitality student' },
    {
      value: 'hospitalitySwitch',
      label: 'Want to switch to hospitality'
    },
    { value: 'other', label: 'Other' }
  ];

  return {
    defaultValues: isUser
      ? {
          title: user?.title || '',
          name: user?.name || '',
          surname: user?.surname || '',
          position: user?.position,
          company: user?.company || '',
          job: user?.job || '',
          city: user?.city || '',
          country: user?.country || '',
          phone: user?.phone || ''
        }
      : defaultValues,
    titleData,
    positionData
  };
};

export { useContactAdressData };
