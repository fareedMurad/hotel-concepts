import { useMedia } from 'react-media';
/**
 * Use media points
 */
const useMediaPoints = () => {
  const GLOBAL_MEDIA_QUERIES = {
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1224px)'
  };
  const { tablet, desktop } = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
  return {
    tablet,
    desktop,
    mobile: !tablet && !desktop
  };
};
export { useMediaPoints };
