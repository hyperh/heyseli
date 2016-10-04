import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './core/App';
import Work from './Work';
import WorkItem from './Work/WorkItem';
import Contact from './Contact';
import Publications from './Publications';
import Resume from './Resume';

const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Work} />
      <Route path="work" component={Work} />
      <Route path="work/:link" component={WorkItem} />
      <Route path="contact" component={Contact} />
      <Route path="publications" component={Publications} />
      <Route path="resume" component={Resume} />
    </Route>
  </Router>
);

export default Routes;
