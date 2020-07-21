const useFooterData = () => {
  const weprovideLinks = [
    { id: 1, caption: 'Company', to: '/' },
    { id: 2, caption: 'Education System', to: '/' },
    { id: 3, caption: 'For Corporate Clients', to: '/' },
    { id: 4, caption: 'Programs Partnership', to: '/course-partnership' },
    { id: 5, caption: 'Jobs', to: '/jobs' }
  ];

  const moreLinks = [
    { id: 1, caption: 'Help & FAQ', to: '/faq' },
    { id: 2, caption: 'Contact Us', to: '/contact-us' }
  ];

  const socials = [
    { id: 1, img: 'facebook', to: '/' },
    { id: 2, img: 'instagram', to: '/' },
    { id: 3, img: 'linkedin', to: '/' }
  ]

  return { weprovideLinks, moreLinks, socials };
};

export { useFooterData };
