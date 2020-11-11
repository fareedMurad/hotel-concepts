import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useLocation } from 'react-router';

const BasicHead: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState({
    matches: false,
    media: '',
    onchange: null
  });

  const { pathname } = useLocation();

  console.log(pathname);

  const [title, setTitle] = useState('Kordie');

  useEffect(() => {
    setTitle(currentTitle);
    () => {
      setTitle('Kordie');
    };
  }, [pathname]);

  const currentTitle = {
    '/': 'Home | Kordie',
    '/programs-catalogue/2FLQCegBLgDC7z3wAFrc2h':
      'Focused Online Programs for Hospitality | Kordie',
    '/programs-catalogue/6E8ZAgk3jj7sTFGw9BJKg1':
      'Digital Transformation | Online Programs for Hospitality | Kordie ',
    '/programs-catalogue/2hUEjZIwo6GBHOt1SzkrTT':
      'Essential Soft Skills | Online Programs for Hospitality | Kordie',
    '/programs-catalogue/2vd7HdUXSIHEOoRvTyY6kp':
      'Covid Crisis Management Programs for Hospitality | Kordie',
    '/programs-catalogue/2VgQmXi2Dre5mqEihTFEPU':
      'Leadership Programs for Hospitality Professionals | Kordie',
    '/learning-approach': 'Learning Approach | Kordie',
    '/marketplace': 'E-books Library | Kordie',
    '/for-companies': 'Online Training Solutions for Hopsitality | Kordie',
    '/about-us': 'About Us | Kordie',
    '/jobs': 'Jobs at Kordie | Kordie',
    '/contact-us': 'Contact Us | Kordie',
    '/course-partnership': 'Partnering with Kordie | Kordie',
    '/contributors': 'Authors & Mentors | Kordie',
    '/insights': 'Insights | Kordie',
    '/faq': 'Help Centre | Kordie',
    '/privacy-policy': 'Privacy Policy | Kordie',
    '/account/profile': 'My Profile | Kordie',
    '/account/subscription': 'My Subscription | Kordie',
    '/account/programs/purchased': 'My Programs | Kordie',
    '/account/programs/wishlist': 'My Programs | Kordie',
    '/account/library/purchased': 'My Library | Kordie',
    '/account/library/wishlist': 'My Library | Kordie'
  }[pathname];

  useEffect(() => {
    setDarkTheme(window.matchMedia('(prefers-color-scheme: dark)'));
  }, []);

  return (
    <Helmet>
      <title>{title}</title>
      {darkTheme.matches ? (
        <link
          rel='icon'
          type='image/png'
          sizes='72x72'
          href={`${require('img/fav-secondary/kordie_favicon_72_72.svg')}`}
          id='dark-scheme-icon'
        />
      ) : (
        <link
          rel='icon'
          type='image/png'
          sizes='72x72'
          href={`${require('img/fav-primary/kordie_faviconP_72_72.svg')}`}
          id='light-scheme-icon'
        />
      )}{' '}
    </Helmet>
  );
};

export { BasicHead };
