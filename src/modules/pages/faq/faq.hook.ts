const useFaqData = () => {
  const filters = [
    { id: 1, title: 'All', count: 30 },
    { id: 2, title: 'On-line programs', count: 40 },
    { id: 3, title: 'Content hub', count: 12 },
    { id: 4, title: 'Market place', count: 42 },
    { id: 5, title: 'Other', count: 15 }
  ];
  const questions = [
    {
      id: 1,
      caption: 'How to get started?',
      description: 'Info for question 1'
    },
    {
      id: 2,
      caption: 'Can I reschedule my call session?',
      description: 'Info for question 2'
    },
    {
      id: 3,
      caption: 'How can I change my target audience leads?',
      description: 'Info for question 3'
    },
    {
      id: 4,
      caption: 'Why is my campaign getting blacklisted?',
      description:
        'World-class faculty introduce you to the very latest in hospitality business knowledge and provide you with the tools and skills to overcome challenges and find solutions. '
    }
  ];
  return { filters, questions };
};

export { useFaqData };
