import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { useSpring, animated } from 'react-spring';

const useToggleAnimate = element => {
  const [toggle, setToggle] = useState(false);
  const { x, y } = useWindowScroll();

  console.log(y);

  useEffect(() => {
    const elementPos = element?.current.offsetTop;
    console.log(elementPos);
    if (elementPos - window.innerHeight / 2 < y) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [element, y]);

  return { toggle };
};

export { useToggleAnimate };
