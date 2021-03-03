import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

import { HashRouter } from 'react-router-dom';
import './assets/base.css';
import Main from './DemoPages/Main';

import { Provider } from 'react-redux';


const rootElement = document.getElementById('root');

const renderApp = Component => {
  ReactDOM.render(
    <Provider>
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    rootElement
  );
};

renderApp(Main);

if (module.hot) {
  module.hot.accept('./DemoPages/Main', () => {
    const NextApp = require('./DemoPages/Main').default;
    renderApp(NextApp);
  });
}
unregister();

// registerServiceWorker();

