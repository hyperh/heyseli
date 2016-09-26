import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './core/App';
import Work from './Work';
import Contact from './Contact';

const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Work} />
      <Route path="work" component={Work} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
);

export default Routes;
