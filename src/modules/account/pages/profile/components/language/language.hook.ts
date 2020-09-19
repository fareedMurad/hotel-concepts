const useLanguageData = () => {
  const languages = [
    {
      locale: 'en-US',
      language: 'English'
    },
    {
      locale: 'en-ES',
      language: 'Spain'
    }
  ];
  return { languages };
};

export { useLanguageData };
