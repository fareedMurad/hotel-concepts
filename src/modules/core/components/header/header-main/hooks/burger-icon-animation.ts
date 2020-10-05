import { useSpring } from 'react-spring';

const useIconAnimation = (showBurger: boolean) => {
  const iconRotation = useSpring(
    showBurger ? { transform: `rotate(90deg)` } : { transform: `rotate(0deg)` }
  );
  return { iconRotation };
};

export { useIconAnimation };
