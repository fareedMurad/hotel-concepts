import React, { useState, useEffect } from 'react';
import { LazyBackgroundProps } from './lazy-background.props';

const LazyBackground: React.FC<LazyBackgroundProps> = ({
  reducedImage,
  className,
  mainImage,
  children
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [image, setImage] = useState(reducedImage);

  useEffect(() => {
    if (reducedImage && !mainImage) {
      setImage(reducedImage);
      return;
    }
    const imageLoader = new Image();
    imageLoader.src = mainImage;
    imageLoader.onload = () => {
      setImage(mainImage);
      setIsImageLoaded(true);
    };
  }, [mainImage, reducedImage]);

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
