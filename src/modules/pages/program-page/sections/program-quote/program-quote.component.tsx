import * as React from 'react';
import { ProgramQuoteProps } from './program-quote.props';
import * as styles from './program-quote.scss';
import { Button, Spinner } from '@core/components';
import { scrollTo } from '@core/helpers/scroll-to.helper';
import { useProgramQuoteData } from './program-quote.hook';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

/**
 * Renders ProgramQuote
 */
//
const ProgramQuote: React.FC<ProgramQuoteProps> = ({ data }) => {
  const { language } = useSelector((state: State) => state.localization);

  const { t } = useTranslation();

  const scrollToEnroll = () => {
    scrollTo('enroll');
  };

  return (
    <section
      className={styles.programQuote}
      style={{
        backgroundImage: `url("${data?.imageQuote?.backgroundImg?.file.url}")`
      }}
    >
      <div className={styles.text}>{`"${data?.imageQuote?.quoteText}"`}</div>
      <Button
        onClick={scrollToEnroll}
        className={styles.button}
        children={t('program-page.program-quote.button-text')}
        arrow
      />
    </section>
  );
};

export { ProgramQuote };
