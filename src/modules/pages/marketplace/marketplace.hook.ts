import { fetchMarketplace } from '@app/redux/marketplace';
import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useMarketplaceData = () => {
  const dispatch = useDispatch();
  const {
    auth: { authorized, user },
    marketplace: { categories, slider }
  } = useSelector((state: State) => state);

  useEffect(() => {
    dispatch(fetchMarketplace());
  }, []);

  return { categories, slider, authorized, user };
};

export { useMarketplaceData };
