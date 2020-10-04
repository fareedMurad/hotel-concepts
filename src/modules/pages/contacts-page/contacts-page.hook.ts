import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

const useContactsPageData = () => {
  const { t } = useTranslation();
  const cardsData = [
    {
      id: 1,
      title: t('contacts.cards.card-one.title'),
      description: t('contacts.cards.card-one.description'),
      href: '/',
      link: 'Help Center'
    },
    {
      id: 2,
      title: t('contacts.cards.card-two.title'),
      description: t('contacts.cards.card-two.description'),
      href: 'mailto:support@cordie.co',
      link: 'support@cordie.co'
    },
    {
      id: 3,
      title: t('contacts.cards.card-three.title'),
      description: t('contacts.cards.card-three.description'),
      href: 'mailto:support@cordie.co',
      link: 'support@cordie.co'
    },
    {
      id: 4,
      title: t('contacts.cards.card-four.title'),
      description: t('contacts.cards.card-four.description'),
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
