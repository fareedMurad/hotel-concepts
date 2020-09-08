/**
 * Props
 */
type FeedbackProps = {
  data: {
    text: string;
    name: string;
    photo: {
      url: string;
    };
    companyName: string;
    sys: {
      id: string;
    };
  }[];
};

export { FeedbackProps };
