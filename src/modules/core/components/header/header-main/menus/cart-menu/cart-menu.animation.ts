/*
 * Animation for cart notifier
 */

import { useTransition } from 'react-spring';

const useCartMenuAnimation = (showNotifier: boolean) => {
  const transition = useTransition(showNotifier, null, {
    from: { height: 0 },
    enter: { height: 416 },
    leave: { height: 0 }
  });
  return { transition };
};

export { useCartMenuAnimation };
