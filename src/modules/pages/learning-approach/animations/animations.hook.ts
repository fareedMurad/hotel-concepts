import { useSpring, config } from 'react-spring';

const useAnimation = toggle => {
  const titleAnimation = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'translateX(0)' : 'translateX(-100px)'
  });

  const textAnimation = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? 'translateY(0)' : 'translateY(100px)'
  });

  const cardAnimation = useSpring({
    opacity: toggle ? 1 : 0,
    config: config.molasses
  });

  return {
    titleAnimation,
    textAnimation,
    cardAnimation
  };
};

export { useAnimation };
