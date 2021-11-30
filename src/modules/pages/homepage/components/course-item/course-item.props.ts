import { SingleProgramModel } from '@app/models/single-program';
/**
 * Props
 */

type ItemProps = {
  name: string;
  sprints: number;
  description: string;
  courseImage: {
    file: { url: number };
  };
};

type CourseItemProps = {
  course: ItemProps;
  // course: SingleProgramModel;
};

export { CourseItemProps };
