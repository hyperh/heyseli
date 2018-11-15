import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Work from '../work/Work';
import WorkItem from '../work/WorkItem';
import Contact from '../components/Contact';
import Publications from '../components/Publications';
import Resume from '../components/Resume';

const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Contact} />
      <Route path="work" component={Work} />
      <Route path="work/:link" component={WorkItem} />
      <Route path="contact" component={Contact} />
      <Route path="publications" component={Publications} />
      <Route path="resume" component={Resume} />
    </Route>
  </Router>
);

export default Routes;
