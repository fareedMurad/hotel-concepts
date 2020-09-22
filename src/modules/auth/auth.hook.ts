import { isBackgroundWhite } from '@core/components/header/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useAuthData = () => {
  const dispatch = useDispatch();

  /**
   * Mount
   */
  useEffect(() => {
    dispatch(isBackgroundWhite(true));
    return () => {
      dispatch(isBackgroundWhite(false));
    };
  }, []);

  return {};
};

export { useAuthData };
