import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
// import App from './App';
// import Work from '../work/Work';
// import WorkItem from '../work/WorkItem';
// import Contact from '../contact/Contact';
// import Publications from '../publications/Publications';
// import Resume from '../resume/Resume';

const MyTest = () => <div>hello</div>;

const Routes = () => (
  <Router>
    <div>
      <Sidebar />
      <Route component={MyTest} />
    </div>
    {/* <IndexRoute component={Contact} />
      <Route path="work" component={Work} />
      <Route path="work/:link" component={WorkItem} />
      <Route path="contact" component={Contact} />
      <Route path="publications" component={Publications} />
      <Route path="resume" component={Resume} /> */}
  </Router>
);

export default Routes;
