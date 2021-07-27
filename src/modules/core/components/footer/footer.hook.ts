import { useTranslation } from 'react-i18next';

const useFooterData = () => {
  const { t } = useTranslation();
  const weprovideLinks = [
    {
      id: 1,
      caption: t('footer.links.we-provide-links.company'),
      to: '/about-us'
    },
    {
      id: 2,
      caption: t('footer.links.we-provide-links.education-system'),
      to: '/contributors'
    },
    {
      id: 3,
      caption: t('footer.links.we-provide-links.for-corporated-client'),
      to: '/learning-approach'
    },
    {
      id: 4,
      caption: t('footer.links.we-provide-links.programs-partnership'),
      to: '/for-companies'
    },
    {
      id: 5,
      caption: t('footer.links.we-provide-links.jobs'),
      to: '/course-partnership'
    }
  ];

  const moreLinks = [
    { id: 1, caption: t('footer.links.more-links.help'), to: '/faq' },
    {
      id: 3,
      caption: t('footer.links.more-links.help-center'),
      to: '',
      target: 'https://kordie.zendesk.com/hc/en-us'
    },
    {
      id: 2,
      caption: t('footer.links.more-links.contact-us'),
      to: '/contact-us'
    }
  ];

  const socials = [
    { id: 1, img: 'facebook', to: '/' },
    { id: 2, img: 'instagram', to: '/' },
    { id: 3, img: 'linkedin', to: 'https://www.linkedin.com/company/kordie' }
  ];

  return { weprovideLinks, moreLinks, socials };
};

export { useFooterData };
