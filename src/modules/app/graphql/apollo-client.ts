import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/qgx3dmmccd7u',
  headers: {
    authorization: 'Bearer JLh7da_UiWHPqGxVG03xXn_0WGgT8o067TILKkX70Gk'
  },
  cache: new InMemoryCache()
});

export { client };
