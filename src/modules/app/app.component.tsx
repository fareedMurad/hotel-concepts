import { startup } from '@general/store';
import { Localization } from '@localization';
import * as React from 'react';
import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Router } from 'react-router-dom';
import { AppProps } from './app.props';
import { State } from './store/state';

import { client } from './graphql/apollo-client';
import { ApolloProvider } from '@apollo/client';

/**
 * App content
 */
const Content: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const { isReady } = useSelector((state: State) => state.general);

  useEffect(() => {
    dispatch(startup());
  }, []);

  if (!isReady) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

/**
 * Renders App
 */
const App: React.FC<AppProps> = ({ children, history, store }) => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Content>
        <Localization>
          <Router history={history}>
            <div>{children}</div>
          </Router>
        </Localization>
      </Content>
    </ApolloProvider>
  </Provider>
);

export { App };
