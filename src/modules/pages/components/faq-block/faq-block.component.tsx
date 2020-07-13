import * as React from 'react';
import { FaqBlockProps } from './faq-block.props';
import * as styles from './faq-block.scss';
import { useFaqData } from './faq.hook';
import { ButtonFilter } from '@core/components';
import { FaqItem } from '@pages/homepage/components/faq-item';
import classNames from 'classnames';

/**
 * Renders FaqBlock
 */
const FaqBlock: React.FC<FaqBlockProps> = ({ className }) => {
  const { data } = useFaqData();
  const uniqueElements = Array.from(new Set(data.map(item => item.category)));
  const [currentCategory, setCurrentCutegory] = React.useState('All');

  const getCategories = () => {
    return uniqueElements.map(name => (
      {name: name, count: data.filter(item => item.category === name).length}
    ))
  }
  const categories = getCategories();
  categories.unshift({name: "All", count: data.length});

  const currentCourses = data.filter(item => currentCategory === 'All' || item.category === currentCategory);

  const onFilterSelect = (name: string) => {
    setCurrentCutegory(name);
  }

  return (
    <section className={classNames(styles.faqBlock, className)}>
      <div className={styles.filters}>
        {categories.map(filter => (
          <ButtonFilter
            key={filter.name}
            title={filter.name}
            count={filter.count}
            onClick={() => {
              onFilterSelect(filter.name);
            }}
            active={currentCategory == filter.name}
            className={styles.filterButton}
          />
        ))}
      </div>
      {currentCourses.map((item, index) => (
        <FaqItem name={item.name} description={item.description} key={item.name + index} />
      ))}
    </section>
  );
};

export { FaqBlock };
