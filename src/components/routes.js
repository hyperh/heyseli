import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './core/App';
import Work from './Work';
import WorkItem from './Work/WorkItem';
import Contact from './Contact';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Work} />
      <Route path="work" component={Work} />
      <Route path="work/:link" component={WorkItem} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
);

export default Routes;
