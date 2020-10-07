import { Card } from '@account/components';
import { Button, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSubscriptionData } from './subscription.hook';
import { SubscriptionTimeProps } from './subscription.props';
import * as styles from './subscription.scss';

/**
 * Renders Subscription time section
 */
const SubscriptionTime: React.FC<SubscriptionTimeProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <Card className={styles.subscriptionTime} title='Subscription time'>
      <div className={styles.noSubscription}>No subscription activated.</div>
      <Button className={styles.buySubscription}>Buy subscription</Button>
      {/* <div className={styles.duration}>{'duration'}</div>
      <div className={styles.expiration}>{'expires'}</div>
      <Button className={styles.prolong} onClick={() => {}}>
        Prolong subscription
      </Button> */}
    </Card>
  );
};

/**
 * Renders my benefits section
 */
const MyBenefits: React.FC = ({}) => {
  const dispatch = useDispatch();

  return (
    <Card className={styles.myBenefits} title='My benefits'>
      <div className={styles.links}>
        <a className={styles.link} href='' target='_blank'>
          Learn about individual subscriptions
        </a>
        <a className={styles.link} href='' target='_blank'>
          Learn about subscriptions for corporate clients
        </a>
      </div>
    </Card>
  );
};

/**
 * Renders Subscription
 */
const Subscription: React.FC = () => {
  const dispatch = useDispatch();
  const { subscription } = useSubscriptionData();

  return (
    <div className={styles.subscription}>
      <Preloader id={Preloaders.subscription}>
        <SubscriptionTime />
        <MyBenefits />
      </Preloader>
    </div>
  );
};

export { Subscription };
