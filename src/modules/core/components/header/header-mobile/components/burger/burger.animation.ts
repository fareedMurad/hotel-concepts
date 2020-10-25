import { useTransition } from 'react-spring';
/*
 * Burger transition
 */

const useBurgerTransition = (showBurger: boolean) => {
  const transition = useTransition(showBurger, null, {
    from: { left: '100vw', position: 'absolute' },
    enter: { left: '0vw' },
    leave: { left: '100vw' }
  });
  return { transition };
};

export { useBurgerTransition };
