import * as React from 'react';
import { LanguageProps } from './language.props';
import * as styles from './language.scss';
import { Button } from '@core/components';
import { useLanguageData } from './language.hook';
import { useClickOutside } from '@core/shared';
import { useDispatch } from 'react-redux';
import { selectUserLanguage } from '@app/redux/account';

/**
 * Renders Language
 */
const Language: React.FC<LanguageProps> = ({ userLanguage }) => {
  const { languages } = useLanguageData();

  const [toggleDropdown, setToggleDropdown] = React.useState(false);
  const ref = React.useRef();
  const dispatch = useDispatch();
  useClickOutside(ref, () => setToggleDropdown(false));
  const [selectedLanguage, setSelectedLanguage] = React.useState({
    language: languages[userLanguage],
    locale: userLanguage
  });
  return (
    <React.Fragment>
      <div className={styles.title}>Language</div>
      <div className={styles.languageSelect}>
        <div className={styles.languageSelectCaption}>Preffered language</div>
        <div
          ref={ref}
          className={styles.languageSelectDropdown}
          onClick={() => {
            setToggleDropdown(!toggleDropdown);
          }}
        >
          <span>{selectedLanguage.language}</span> <span>&#x25BE;</span>
          {toggleDropdown && (
            <div className={styles.dropDown}>
              {Object.keys(languages).map(el => (
                <div
                  key={el}
                  className={styles.dropDownItem}
                  onClick={() => {
                    setSelectedLanguage({
                      language: languages[el],
                      locale: el
                    });
                  }}
                >
                  {languages[el]}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Button
        onClick={() => dispatch(selectUserLanguage(selectedLanguage.locale))}
        className={styles.button}
      >
        Save
      </Button>
    </React.Fragment>
  );
};

export { Language };
