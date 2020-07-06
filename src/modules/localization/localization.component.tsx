import * as React from 'react';
import { LocalizationProps } from './localization.props';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { createContext } from 'react';
import { rtlLanguages, Direction } from './models';

/**
 * Direction context
 */
const Context = createContext({
  direction: 'ltr'
});

const { Provider } = Context;

/**
 * Provide direction value
 */
const DirectionProvider: React.FC = ({ children }) => {
  const { i18n } = useTranslation();
  const isRtl = rtlLanguages[i18n.language];
  const direction = isRtl ? Direction.rtl : Direction.ltr;

  return (
    <div className={`direction-${direction}`}>
      <Provider value={{ direction }}>{children}</Provider>
    </div>
  );
};

/**
 * Use direction context
 */
const useDirection = () => {
  const { direction } = React.useContext(Context);

  return direction;
};

/**
 * Renders Localization
 */
const Localization: React.FC<LocalizationProps> = ({ children }) => (
  <I18nextProvider i18n={i18next}>
    <DirectionProvider>{children}</DirectionProvider>
  </I18nextProvider>
);

export { Localization, useDirection };
