import * as React from 'react';
import { FaqBlockProps } from './faq-block.props';
import * as styles from './faq-block.scss';
import { useFaqData } from './faq.hook';
import { ButtonFilter, H2 } from '@core/components';
import { FaqItem } from '@pages/homepage/components/faq-item';
import classNames from 'classnames';
import { gql, useQuery } from '@apollo/client';
import { Spinner } from '@core/components/spinner';

/**
 * faq query
 */
const GET_FAQ = gql`
  {
    faqCollection {
      items {
        question
        answear
        category
      }
    }
  }
`;
/**
 * Renders FaqBlock
 */
const FaqBlock: React.FC<FaqBlockProps> = ({ className, showTitle }) => {
  const [currentCategory, setCurrentCutegory] = React.useState('All');
  const { data, loading, error } = useQuery(GET_FAQ);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (loading) return <Spinner />;
  const { items } = data.faqCollection;

  const uniqueElements = Array.from(new Set(items.map(item => item.category)));

  const getCategories = () => {
    return uniqueElements.map(name => ({
      name: name,
      count: items.filter(item => item.category === name).length
    }));
  };
  const categories = getCategories();
  categories.unshift({ name: 'All', count: items.length });

  const currentItems = items.filter(
    item => currentCategory === 'All' || item.category === currentCategory
  );

  const onFilterSelect = (name: string) => {
    setCurrentCutegory(name);
  };

  return (
    <section className={classNames(styles.faqBlock, className)}>
      {showTitle && (
        <H2 className={styles.title}>Freaquently Asked Questions</H2>
      )}
      <div className={styles.filters}>
        {categories.map(filter => {
          const { name, count } = filter;
          return (
            <ButtonFilter
              key={`${name}`}
              title={`${name}`}
              count={count}
              onClick={() => {
                onFilterSelect(`${name}`);
              }}
              active={currentCategory == filter.name}
              className={styles.filterButton}
            />
          );
        })}
      </div>
      {currentItems
        .filter((el, idx) => idx < 6)
        .map((item, index) => (
          <FaqItem
            name={item.question}
            description={item.answear}
            key={item.question + index}
          />
        ))}
    </section>
  );
};

export { FaqBlock };
