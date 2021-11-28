import { useTranslation } from 'react-i18next';
const AskQuestionsData = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      title: t('hotel-concepts.ask-questions.modal1.title'),
      content: t('hotel-concepts.ask-questions.modal1.content')
    },
    {
      id: 2,
      title: t('hotel-concepts.ask-questions.modal2.title'),
      content: t('hotel-concepts.ask-questions.modal2.content')
    },
    {
      id: 3,
      title: t('hotel-concepts.ask-questions.modal3.title'),
      content: t('hotel-concepts.ask-questions.modal3.content')
    },

    {
      id: 4,
      title: t('hotel-concepts.ask-questions.modal4.title'),
      content: t('hotel-concepts.ask-questions.modal4.content')
    },

    {
      id: 5,
      title: t('hotel-concepts.ask-questions.modal5.title'),
      content: t('hotel-concepts.ask-questions.modal5.content')
    }
  ];

  return { data };
};

export { AskQuestionsData };
