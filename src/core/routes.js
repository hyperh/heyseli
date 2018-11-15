import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import WorkItem from '../work/WorkItem';
// import Publications from '../publications/Publications';
// import Resume from '../resume/Resume';

const Routes = () => (
  <Router>
    <App />
    {/* 
      
      <Route path="work/:link" component={WorkItem} />
      
      <Route path="publications" component={Publications} />
      <Route path="resume" component={Resume} /> */}
  </Router>
);

export default Routes;
