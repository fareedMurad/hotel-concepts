import { Language } from '@app/models/enum';
import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';

const useLocalizationData = () => {
  const {
    localization: { language },
    cart: { showDropdown }
  } = useSelector((state: State) => state);
  const languages = [
    {
      id: Language.en,
      name: 'EN'
    }
    // {
    //   id: Language.es,
    //   name: 'ES'
    // }
    // {
    //   id: Language.ru,
    //   name: 'rus'
    // }
  ];

  const selectedLanguage = languages.find(el => el.id === language);

  return { languages, selectedLanguage, showDropdown };
};

export { useLocalizationData };
