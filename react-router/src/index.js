import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// browserHistory, hasHistory, memoryHistory
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import route from './routes';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={route} />
  </Provider>
  , document.querySelector('.container'));
