import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSabscriptionData } from './subscription.hook';
import { SubscriptionProps } from './subscription.props';
import * as styles from './subscription.scss';

/**
 * Renders Subscription
 */
const Subscription: React.FC<SubscriptionProps> = ({}) => {
  // const { subscribed } = useSelector((state: State) => state.account);
  const dispatch = useDispatch();
  const subscription = useSabscriptionData();

  // if (subscribed)
  //   return (
  //     <div className={styles.subscription}>
  //       <H3>My subscription</H3>
  //       <H2>{subscription.name}</H2>
  //       <div>benefits: {subscription.benefits}</div>
  //       <div className={styles.subscriptionDuration}>
  //         Your subscription ends:{' '}
  //         <Moment date={subscription.expirationDate} format='DD/MM/YYYY' />
  //       </div>
  //     </div>
  //   );
  return (
    <div className={styles.subscription}>
      Page is under development
      {/* <div className={styles.mySubscriptions}>
        <div>No subscription activated</div>
        <button onClick={() => dispatch(subscribe(subscription))}>
          subscribe
        </button>
      </div>
      <div className={styles.suggestedSubscriptions}></div> */}
    </div>
  );
};

export { Subscription };
