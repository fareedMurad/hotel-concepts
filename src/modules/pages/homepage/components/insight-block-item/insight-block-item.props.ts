/**
 * Props
 */
type InsightBlockItemProps = {
  title: string;
  categories: any;
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
  id: string;
};

export { InsightBlockItemProps };
