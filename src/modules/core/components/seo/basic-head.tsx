import React from 'react';
import Helmet from 'react-helmet';

const BasicHead: React.FC = () => {
  return (
    <Helmet>
      <title>Kordie</title>
      <link
        rel='icon'
        type='image/png'
        sizes='72x72'
        href={`${require('img/fav-primary/kordie_favicon_72_72.svg')}`}
      />
    </Helmet>
  );
};

export { BasicHead };
