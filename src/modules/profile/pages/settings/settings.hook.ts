import { useDispatch, useSelector } from 'react-redux';
import { State } from '@app/store/state';
import { SettingsModel } from '@profile/models';
import { useEffect } from 'react';
import { getSettings } from '@profile/store';

const useSettingsData = () => {
  const dispatch = useDispatch();
  const { settings } = useSelector((state: State) => state.profile);

  const defaultValues: SettingsModel = {
    notifications: false
  };

  useEffect(() => {
    dispatch(getSettings());
  }, []);

  return {
    defaultValues: settings ? settings : defaultValues
  };
};

export { useSettingsData };
