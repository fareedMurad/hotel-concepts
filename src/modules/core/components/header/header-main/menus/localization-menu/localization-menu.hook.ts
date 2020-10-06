import { Language } from '@app/models/enum';
import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';

const useLocalizationData = () => {
  const { language } = useSelector((state: State) => state.localization);
  const languages = [
    {
      id: Language.en,
      name: 'eng'
    },
    {
      id: Language.es,
      name: 'esp'
    }
    // {
    //   id: Language.ru,
    //   name: 'rus'
    // }
  ];

  const selectedLanguage = languages.find(el => el.id === language);

  return { languages, selectedLanguage };
};

export { useLocalizationData };
