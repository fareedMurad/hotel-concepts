import * as React from 'react';
import { LanguageProps } from './language.props';
import * as styles from './language.scss';
import { Button } from '@core/components';
import { useLanguageData } from './language.hook';

/**
 * Renders Language
 */
const Language: React.FC<LanguageProps> = ({}) => {
  const { languages } = useLanguageData();
  const [toggleDropdown, setToggleDropdown] = React.useState(false);

  const [selectedLanguage, setSelectedLanguage] = React.useState('English');
  return (
    <React.Fragment>
      <div className={styles.title}>Language</div>
      <div className={styles.languageSelect}>
        <div className={styles.languageSelectCaption}>Preffered language</div>
        <div
          className={styles.languageSelectDropdown}
          onClick={() => setToggleDropdown(!toggleDropdown)}
        >
          <span>{selectedLanguage} </span> <span>&#x25BE;</span>
          {toggleDropdown && (
            <div className={styles.dropDown}>
              {languages.map(el => (
                <div
                  key={el.language + el.locale}
                  className={styles.dropDownItem}
                  onClick={() => setSelectedLanguage(el.language)}
                >
                  {el.language}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Button className={styles.button}>Save</Button>
    </React.Fragment>
  );
};

export { Language };
