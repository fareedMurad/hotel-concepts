import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.spaceId}/environments/dev`,
  headers: {
    authorization: `Bearer ${process.env.accessToken}`
  },
  cache: new InMemoryCache()
});

export { client };
