import React, { useState, useEffect } from 'react';
import { useHeroLearningApproachData } from './hero-learning-approach.hook';

const LazyBackground = () => {
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
      style={
        isImageLoaded
          ? {
              backgroundImage: `url(${image})`,
              width: '100%',
              height: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }
          : {
              backgroundImage: `url(${image})`,
              width: '100%',
              height: '100%',
              filter: 'blur(20px)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }
      }
    />
  );
};

export { LazyBackground };
