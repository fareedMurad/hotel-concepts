const useContactsPageData = () => {
  const data = [
    {
      id: 1,
      title: 'FAQ',
      description: 'For quick answers to common questions, try our FAQ',
      href: '/help-center',
      link: 'Help Center'
    },
    {
      id: 2,
      title: 'Feedback',
      description: 'If you need help using Kordie just press the “support” button at the bottom right of every course page. ',
      href: 'mailto:support@cordie.co',
      link: 'support@cordie.co'
    },
    {
      id: 3,
      title: 'Media Enquiries',
      description: 'Please send an email to:',
      href: 'mailto:support@cordie.co',
      link: 'support@cordie.co'
    },
    {
      id: 4,
      title: 'Community Manager',
      description: 'For quick answers to common questions, try our FAQ',
      href: 'mailto:support@cordie.co',
      link: 'support@cordie.co'
    }
  ];

  return { data };
};

export { useContactsPageData };
