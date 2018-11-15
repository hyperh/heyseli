import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
// import Work from '../work/Work';
// import WorkItem from '../work/WorkItem';
// import Contact from '../contact/Contact';
// import Publications from '../publications/Publications';
// import Resume from '../resume/Resume';

const MyTest = () => <div>hello</div>;

const Routes = () => (
  <Router>
    <Route path="/" component={App}>
      <Route component={MyTest} />
      {/* <IndexRoute component={Contact} />
      <Route path="work" component={Work} />
      <Route path="work/:link" component={WorkItem} />
      <Route path="contact" component={Contact} />
      <Route path="publications" component={Publications} />
      <Route path="resume" component={Resume} /> */}
    </Route>
  </Router>
);

export default Routes;
