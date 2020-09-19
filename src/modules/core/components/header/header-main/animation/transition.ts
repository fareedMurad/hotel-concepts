import React from 'react';
import { useTransition } from 'react-spring';

const useAnimation = show => {
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return { transitions };
};

export { useAnimation };