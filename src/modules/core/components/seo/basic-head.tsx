import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';

const BasicHead: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState({
    matches: false,
    media: '',
    onchange: null
  });

  useEffect(() => {
    setDarkTheme(window.matchMedia('(prefers-color-scheme: dark)'));
    console.log(window.matchMedia('(prefers-color-scheme: dark)'));
  }, []);

  return (
    <Helmet>
      <title>Kordie</title>
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
