import { fetchSubscription } from '@app/redux/account';
import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useSubscriptionData = () => {
  const dispatch = useDispatch();
  const {
    subscription: { subscription },
    auth: {
      user: { subscriptionStatus }
    }
  } = useSelector((state: State) => state);

  useEffect(() => {
    dispatch(fetchSubscription());
  }, []);

  return { subscription, subscriptionStatus };
};

export { useSubscriptionData };
