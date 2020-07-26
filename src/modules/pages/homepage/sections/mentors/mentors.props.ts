import { array } from 'yup';

/**
 * Props
 */
type MentorsProps = {
  contributors: Array<any>;
  loading: boolean;
  url?: string;
  modifiedCaption?: boolean;
};

export { MentorsProps };
