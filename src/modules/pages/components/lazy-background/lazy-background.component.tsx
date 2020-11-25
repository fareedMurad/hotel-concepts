import React, { useState, useEffect } from 'react';
import { useLazyBackgroundData } from './lazy-background.hook';
import { LazyBackgroundProps } from './lazy-background.props';

const LazyBackground: React.FC<LazyBackgroundProps> = ({
  reducedImageId,
  fullImageId,
  className,
  children
}) => {
  const { fullImage, reducedImage } = useLazyBackgroundData(
    reducedImageId,
    fullImageId
  );

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [image, setImage] = useState(reducedImage);

  useEffect(() => {
    if (reducedImage && !fullImage) {
      setImage(reducedImage);
      return;
    }
    const imageLoader = new Image();
    imageLoader.src = fullImage;
    imageLoader.onload = () => {
      setImage(fullImage);
      setIsImageLoaded(true);
    };
  }, [fullImage, reducedImage]);

  return (
    <div
      className={className}
      style={
        isImageLoaded
          ? {
              backgroundImage: `url(${image})`
            }
          : {
              backgroundImage: `url(${image})`
            }
      }
    >
      {children}
    </div>
  );
};

export { LazyBackground };
