/**
 * Props
 */
type ArticleCardProps = {
  articles: {
    img: string;
    categoriesCollection: any;
    date: string;
    description: string;
    title: string;
    articleImage: {
      url: string;
    };
    sys: {
      id: string;
    };
  };
};

export { ArticleCardProps };
