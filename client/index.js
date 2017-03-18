import 'grommet/scss/vanilla/index.scss';
import React from 'react';
import ReduxPromise from 'redux-promise';
import createLogger from 'redux-logger';
import App from 'grommet/components/App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import routes from './routes';
import './style/main.scss';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(ReduxPromise, logger)
  )
);

render((
  <App
    centered={false}
  >
    <Provider store={store}>
      <Router history={hashHistory} routes={routes} />
    </Provider>
  </App>), document.getElementById('root'));
