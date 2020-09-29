import { Card } from '@account/components';
import { Button, Preloader } from '@core/components';
import { Preloaders } from '@ui/models';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useSubscriptionData } from './subscription.hook';
import { SubscriptionTimeProps } from './subscription.props';
import * as styles from './subscription.scss';

/**
 * Renders Subscription time
 */
const SubscriptionTime: React.FC<SubscriptionTimeProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <Card className={styles.subscriptionTime} title='Subscription time'>
      <div className={styles.duration}>{'duration'}</div>
      <div className={styles.expiration}>{'expires'}</div>
      <Button className={styles.prolong} onClick={() => {}}>
        Prolong subscription
      </Button>
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
      </Preloader>
    </div>
  );
};

export { Subscription };
