import { gql, useQuery } from '@apollo/client';
import { State } from '@app/redux/state';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const useContactsPageData = () => {
  const { t } = useTranslation();
  const {
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);

  const cardsData = [
    {
      id: 1,
      title: t('contacts.cards.card-one.title'),
      description: t('contacts.cards.card-one.description'),
      href: 'https://kordie.zendesk.com/hc/en-us',
      link: 'Help Center'
    },
    {
      id: 2,
      title: t('contacts.cards.card-two.title'),
      description: t('contacts.cards.card-two.description')
    },
    {
      id: 3,
      title: t('contacts.cards.card-three.title'),
      description: t('contacts.cards.card-three.description'),
      href: 'mailto:team@kordie.com',
      link: 'team@kordie.com'
    },
    {
      id: 4,
      title: t('contacts.cards.card-four.title'),
      description: t('contacts.cards.card-four.description'),
      href: 'mailto:mariam@kordie.com',
      link: 'mariam@kordie.com'
    }
  ];
  const GET_HERO_IMAGE = gql`
    {
      asset(id: "oU5cS4QpeqOuAtztBQpOt") {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  const oldSafari = browserName === 'Safari' && browserVersion < '14';
  const imageUrl = oldSafari ? data?.asset?.url : `${data?.asset?.url}?fm=webp`;
  return {
    contactsFooterImage: imageUrl,
    cardsData
  };
};

export { useContactsPageData };
