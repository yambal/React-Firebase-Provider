import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import store from './redux/store'

import { MyThemeProvider } from './provider/MyThemeProvider';

ReactDOM.render(
  <Provider store={store}>
    <MyThemeProvider fontType="ja" baseFontSize={16}>
      <App />
    </MyThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

serviceWorker.register();
