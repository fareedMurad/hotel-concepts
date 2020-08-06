import React from 'react';
import Helmet from 'react-helmet';
import { SEOProps } from './seo.props';

const SEO: React.FC<SEOProps> = ({ title, thumbnail, url }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:image' content={thumbnail} />
        <meta property='og:url' content={url} />
      </Helmet>
    </React.Fragment>
  );
};

export { SEO };
