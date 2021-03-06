import { State } from '@app/redux/state';
import { ButtonFilter, H2 } from '@core/components';
import { Spinner } from '@core/components/spinner';
import { capitalize } from '@core/shared';
import { FaqItem } from '@pages/homepage/components/faq-item';
import classNames from 'classnames';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { FaqBlockProps } from './faq-block.props';
import * as styles from './faq-block.scss';
import { useFaqData } from './faq.hook';

/**
 * Renders FaqBlock
 */
const FaqBlock: React.FC<FaqBlockProps> = ({ className, showTitle, page }) => {
  const [currentCategory, setCurrentCutegory] = React.useState('');
  const { language } = useSelector((state: State) => state.localization);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { faqData, faqDataLoading } = useFaqData(language, page);

  React.useEffect(() => {
    if (faqData) {
      setCurrentCutegory(faqData[0].category);
    }
  }, [faqData]);

  if (faqDataLoading) return <Spinner />;
  if (!faqData) return null;

  const uniqueElements = Array.from(
    new Set(faqData.map(item => item.category))
  );

  const getCategories = () => {
    return uniqueElements.map((name: string) => ({
      name: name,
      count: faqData.filter(item => item.category === name).length
    }));
  };
  const categories = getCategories();
  // categories.unshift({ name: 'All', count: faqData.length });

  const currentItems = faqData.filter(
    item => item.category === currentCategory
  );

  const onFilterSelect = (name: string) => {
    setCurrentCutegory(name);
  };

  return (
    <section className={classNames(styles.faqBlock, className)}>
      <img
        className={styles.rPattern}
        src={require('img/patterns/rp-4.svg')}
        alt=''
      />

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
        .filter((el, idx) => idx < 8)
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
