import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { useSpring, animated } from 'react-spring';

const useToggleAnimate = element => {
  const [toggle, setToggle] = useState(false);
  const { x, y } = useWindowScroll();

  useEffect(() => {
    const elementPos = element?.current.offsetTop;
    if (elementPos / 2 < y) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [element, y]);

  return { toggle };
};

export { useToggleAnimate };

// const AnimationWrap: React.FC<{ element: any }> = ({ element, children }) => {
//   const [toggle, setToggle] = useState(false);
//   const { x, y } = useWindowScroll();

//   useEffect(() => {
//     const elementPos = element?.current.offsetTop;
//     if (elementPos / 2 < y) {
//       setToggle(true);
//     } else {
//       setToggle(false);
//     }
//   }, [element, y]);

//   const props = useSpring({
//     opacity: toggle ? 1 : 0,
//     transform: toggle ? 'translateX(0)' : 'translateX(-100px)'
//   });

//   return <animated.div style={props}>{children}</animated.div>;
// };

// export { AnimationWrap };
