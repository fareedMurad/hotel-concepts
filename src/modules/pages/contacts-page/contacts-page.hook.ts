import { gql, useQuery } from '@apollo/client';

const useContactsPageData = () => {
  const cardsData = [
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
      description:
        'If you need help using Kordie just press the “support” button at the bottom right of every course page. ',
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
  const GET_HERO_IMAGE = gql`
    {
      asset(id: "4PeOoO6jJEQmcZxv4WSUqq") {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  return {
    contactsFooterImage: data?.asset?.url,
    cardsData
  };
};

export { useContactsPageData };
