import * as React from 'react';
import { FaqBlockProps } from './faq-block.props';
import * as styles from './faq-block.scss';
import { useFaqData } from './faq.hook';
import { ButtonFilter, H2 } from '@core/components';
import { FaqItem } from '@pages/homepage/components/faq-item';
import classNames from 'classnames';
import { Spinner } from '@core/components/spinner';
import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';

/**
 * Renders FaqBlock
 */
const FaqBlock: React.FC<FaqBlockProps> = ({ className, showTitle }) => {
  const [currentCategory, setCurrentCutegory] = React.useState('All');
  const { language } = useSelector((state: State) => state.localization);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { faqData, faqDataLoading } = useFaqData(language);

  if (faqDataLoading) return <Spinner />;

  const uniqueElements = Array.from(
    new Set(faqData.map(item => item.category))
  );

  const getCategories = () => {
    return uniqueElements.map(name => ({
      name: name,
      count: faqData.filter(item => item.category === name).length
    }));
  };
  const categories = getCategories();
  categories.unshift({ name: 'All', count: faqData.length });

  const currentItems = faqData.filter(
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
            description={item.answer}
            key={item.question + index}
          />
        ))}
    </section>
  );
};

export { FaqBlock };
