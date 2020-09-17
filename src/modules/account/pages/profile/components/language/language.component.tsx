import * as React from 'react';
import { LanguageProps } from './language.props';
import * as styles from './language.scss';
import { Button } from '@core/components';

/**
 * Renders Language
 */
const Language: React.FC<LanguageProps> = ({}) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState({
    name: 'English',
    local: 'en-US'
  });
  return (
    <React.Fragment>
      <div className={styles.title}>Language</div>
      <div className={styles.languageSelect}>
        <div className={styles.languageSelectCaption}>Preffered language</div>
        <div className={styles.languageSelectDropdown}>
          <span>{selectedLanguage.name} </span> <span>&#x25BE;</span>
        </div>
      </div>
      <Button className={styles.button}>Save</Button>
    </React.Fragment>
  );
};

export { Language };
