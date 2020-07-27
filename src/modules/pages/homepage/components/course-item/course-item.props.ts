/**
 * Props
 */
type CourseItemProps = {
  course: {
    sys: {
      id: number | string;
    };
    id: number;
    name: string;
    description: string;
    price: number;
    weeks?: number;
    sprints?: number;
    img?: string;
    slug: string;
    catalogueId: string;
    courseImage: {
      url: string;
    };
  };
};

export { CourseItemProps };
