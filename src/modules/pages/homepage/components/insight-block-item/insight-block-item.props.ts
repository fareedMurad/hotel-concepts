/**
 * Props
 */
type InsightBlockItemProps = {
  title: string;
  category: string;
  slug: string;
  text: string;
  articleImage: {
    url: string;
  };
  date: {
    day: string | number;
    month: string;
    year: string | number;
  };
};

export { InsightBlockItemProps };
