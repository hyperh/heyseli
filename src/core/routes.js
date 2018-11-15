import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import Work from '../work/Work';
// import WorkItem from '../work/WorkItem';
// import Publications from '../publications/Publications';
// import Resume from '../resume/Resume';

const Routes = () => (
  <Router>
    <App />
    {/* <IndexRoute component={Contact} />
      <Route path="work" component={Work} />
      <Route path="work/:link" component={WorkItem} />
      <Route path="contact" component={Contact} />
      <Route path="publications" component={Publications} />
      <Route path="resume" component={Resume} /> */}
  </Router>
);

export default Routes;
