import { startup } from '@general/store';
import { Localization } from '@localization';
import * as React from 'react';
import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Router } from 'react-router-dom';
import { AppProps } from './app.props';
import { State } from './store/state';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/apollo-client';
import { useLocation } from 'react-router-dom';
import { ErrorBoundary } from '@core/components/error-boundary';
import { StickyContainer } from 'react-sticky';

/**
 * Scroll to top
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
/**
 * App content
 */
const Content: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const { isReady } = useSelector((state: State) => state.general);
  useEffect(() => {
    dispatch(startup());
    // window.scrollTo(0, 0);
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
      <ErrorBoundary history={history}>
        <Content>
          <Localization>
            <StickyContainer>
              <Router history={history}>
                <div>{children}</div>
              </Router>
            </StickyContainer>
          </Localization>
        </Content>
      </ErrorBoundary>
    </ApolloProvider>
  </Provider>
);

export { App, ScrollToTop };
