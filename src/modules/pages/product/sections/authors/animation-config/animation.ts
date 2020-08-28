import { useTransition, config } from 'react-spring';

const useAnimatedTransition = item => {
  const transitions = useTransition(item, item => item.key, {
    from: { transform: 'translateX:-100vw' },
    enter: { transform: 'translateX:0' },
    leave: { transform: 'translateX:100vw' }
  });
  return transitions;
};

export { useAnimatedTransition };
