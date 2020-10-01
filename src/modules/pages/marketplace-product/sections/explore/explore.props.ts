import { FileModel } from '@account/pages/library/models';

/**
 * Props
 */
type ExploreProps = {
  /**
   * Data
   */
  data: {
    previewPages: {
      title: string;
      file: FileModel;
    };
  };
};

export { ExploreProps };
