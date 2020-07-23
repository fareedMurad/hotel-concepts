import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/qgx3dmmccd7u/environments/master`,
  headers: {
    authorization: `Bearer swkDaTwEiPt4P55HNC08DuKCEcSKKWDQcNy-xzMvs-I`
  },
  cache: new InMemoryCache()
});

export { client };
