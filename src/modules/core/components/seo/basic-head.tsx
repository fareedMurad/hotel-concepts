import React from 'react';
import Helmet from 'react-helmet';

const BasicHead: React.FC = () => {
  return (
    <Helmet>
      <title>Kordie</title>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href={`${require('img/fav/apple-touch-icon.png')}`}
      />

      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href={`${require('img/fav/favicon-32x32.png')}`}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href={`${require('img/fav/favicon-16x16.png')}`}
      />
    </Helmet>
  );
};

export { BasicHead };
