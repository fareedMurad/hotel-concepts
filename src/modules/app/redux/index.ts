import { ApiService, HttpService } from '@app/services';
import { FastSpringService } from '@app/services/config/fastspring.service';
import { init } from '@router/store';
import { History } from 'history';
import { applyMiddleware, createStore as reduxCreateStore } from 'redux';
import { run } from 'redux-chill';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { Context } from './context';
import { app } from './reducer';
import { sagas } from './sagas';
import { enviroment } from '@env';

/**
 * Create redux store
 */
const createStore = (history: History) => {
  const sagaMiddleware = createSagaMiddleware({
    onError: error => console.log(error, 'Saga error occured')
  });

  const store = reduxCreateStore(
    app,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  const http = new HttpService();

  const context: Context = {
    history,
    http,
    api: new ApiService(http),
    fs: new FastSpringService(enviroment.fsStoreFront)
  };

  run(sagaMiddleware, sagas, context);

  store.dispatch(init(history.location));

  return store;
};

export { createStore };
