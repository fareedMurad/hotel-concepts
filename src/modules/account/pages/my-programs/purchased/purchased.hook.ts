import { fetchProgramsPurchased } from '@app/redux/account';
import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const usePurchasedData = () => {
  const dispatch = useDispatch();
  const { purchased } = useSelector((state: State) => state.programs);

  /**
   * On mount fetch purchased
   */
  useEffect(() => {
    dispatch(fetchProgramsPurchased());
  }, []);

  return { purchased };
};

export { usePurchasedData };
