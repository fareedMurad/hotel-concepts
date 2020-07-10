const useFooterData = () => {
  const companyLinks = [
    { id: 1, caption: 'Focused Programs', to: '/' },
    { id: 2, caption: 'Hospitality Leadership', to: '/' },
    { id: 3, caption: 'New Trends', to: '/' },
    { id: 4, caption: 'Digital Transformation', to: '/' },
    { id: 5, caption: 'Essential Soft Skills', to: '/' }
  ];
  const weprovideLinks = [
    { id: 1, caption: 'Company', to: '/' },
    { id: 2, caption: 'Education System', to: '/' },
    { id: 3, caption: 'For Corporate Clients', to: '/' },
    { id: 4, caption: 'Programs Partnership', to: '/' },
    { id: 5, caption: 'Jobs', to: '/' }
  ];

  const moreLinks = [
    { id: 1, caption: 'Help & FAQ', to: '/' },
    { id: 2, caption: 'Contact Us', to: '/' }
  ];

  const socials = [
    { id: 1, img: 'facebook', to: '/' },
    { id: 2, img: 'instagram', to: '/' },
    { id: 3, img: 'linkedin', to: '/' }
  ]

  return { companyLinks, weprovideLinks, moreLinks, socials };
};

export { useFooterData };
