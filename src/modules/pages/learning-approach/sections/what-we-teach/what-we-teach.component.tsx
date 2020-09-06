import * as React from 'react';
import { WhatWeTeachProps } from './what-we-teach.props';
import * as styles from './what-we-teach.scss';
import { useWhatWeTeachData } from './what-we-teach.hook';
import { Button, H2, Spinner } from '@core/components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/store/state';

const Card = ({ card, rate }) => {
  const {
    sys: { id },
    name,
    description
  } = card;

  return (
    <div className={styles.card}>
      <div className={styles.cardRate}>{rate + 1}.0</div>
      <div className={styles.cardCaption}>{name}</div>
      <div className={styles.cardDescription}>{description}</div>
      <Link to={`/programs-catalogue/${id}`}>
        <Button
          className={styles.cardButton}
          children='Explore programs'
          arrow='&rarr;'
          width={301}
        />
      </Link>
    </div>
  );
};
/**
 * Renders WhatWeTeach
 */
const WhatWeTeach: React.FC<WhatWeTeachProps> = ({}) => {
  const { t } = useTranslation();
  const { language } = useSelector((state: State) => state.localization);
  const {
    filtersCategoriesData,
    filtersCategoriesLoading
  } = useWhatWeTeachData(language);

  if (filtersCategoriesLoading) return <Spinner />;

  return (
    <div className={styles.whatWeTeach}>
      <H2 className={styles.caption}>
        {t('learning-approach.what-we-teach.title')}
      </H2>
      <main className={styles.cardContainer}>
        {filtersCategoriesData.map((card, index) => (
          <Card card={card} key={index} rate={index} />
        ))}
      </main>
    </div>
  );
};

export { WhatWeTeach };
