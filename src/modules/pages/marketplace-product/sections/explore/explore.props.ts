import {
  Book,
  BookCoverPhotos,
  FileModel
} from '@account/pages/library/models';

/**
 * Props
 */
type ExploreProps = {
  /**
   * Data
   */
  data: {
    coverPhotos: BookCoverPhotos[];
  };
};

export { ExploreProps };
