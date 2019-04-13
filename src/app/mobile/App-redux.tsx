import React, { Fragment } from 'react';
import App from './App-mobile';
import { Provider } from 'react-redux';
import createStore from 'store/store';

const store = createStore();

const AppMobileRedux = () => (
  <Provider store={store}>
    <Fragment>
      <App />
    </Fragment>
  </Provider>
);

export default AppMobileRedux;
