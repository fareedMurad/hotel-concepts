import Lottie from 'lottie-react';
import * as React from 'react';
import animationData from './data.json';

/**
 * Renders StartUpPreloader
 */
const StartUpPreloader: React.FC = ({}) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 9999999,
        backgroundColor: 'white',
        width: '100vw',
        height: '100vh'
      }}
    >
      <Lottie animationData={animationData} height={400} width={400} />
    </div>
  );
};

export { StartUpPreloader };
