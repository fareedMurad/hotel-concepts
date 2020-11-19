import React, { useState, useEffect } from 'react';
import { useHeroLearningApproachData } from './hero-learning-approach.hook';

const LazyBackground = ({ className, children }) => {
  //REFACOR!!!!
  const {
    heroLearningApproachData,
    reducedImage
  } = useHeroLearningApproachData();

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [image, setImage] = useState(reducedImage);

  useEffect(() => {
    if (reducedImage && !heroLearningApproachData) {
      setImage(reducedImage);
      return;
    }
    const imageLoader = new Image();
    imageLoader.src = heroLearningApproachData;
    imageLoader.onload = () => {
      setImage(heroLearningApproachData);
      setIsImageLoaded(true);
    };
  }, [heroLearningApproachData, reducedImage]);

  return (
    <div
      className={className}
      style={
        isImageLoaded
          ? {
              backgroundImage: `url(${image})`
            }
          : {
              backgroundImage: `url(${image})`,
              filter: 'blur(20px)'
            }
      }
    >
      {children}
    </div>
  );
};

export { LazyBackground };
