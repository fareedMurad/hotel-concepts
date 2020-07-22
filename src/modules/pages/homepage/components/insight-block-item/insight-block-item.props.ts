/**
 * Props
 */
type InsightBlockItemProps = {
  title: string;
  categories: string[];
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
  id: string
};

export { InsightBlockItemProps };
