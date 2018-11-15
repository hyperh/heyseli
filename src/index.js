import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './core/routes';

render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./core/routes', () => {
    const NextRoutes = require('./core/routes').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoutes />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
