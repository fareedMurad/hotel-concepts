/**
 * Props
 */
type AuthorsProps = {
  authors: {
    name: string;
    surname: string;
    shortDescription: string;
    position: string;
    experience: string;
    mentorPicture: {
      url: string;
    };
    sys: {
      id: string;
    };
  }[];
};

export { AuthorsProps };
