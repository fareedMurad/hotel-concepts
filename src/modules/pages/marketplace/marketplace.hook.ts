import { fetchMarketplaceCategories } from '@app/redux/marketplace';
import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useMarketplaceData = () => {
  const dispatch = useDispatch();
  const {} = useSelector((state: State) => state.marketplace);

  useEffect(() => {
    dispatch(fetchMarketplaceCategories());
  }, []);
};

export { useMarketplaceData };
