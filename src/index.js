import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';

import App from './App';

import store from './common/store';
import * as serviceWorker from './common/utils/serviceWorker';

import './common/styles/index.css';
import 'normalize.css';

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
