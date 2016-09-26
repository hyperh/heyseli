import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './components/routes';

render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/routes', () => {
    const NextRoutes = require('./components/routes').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoutes />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
