import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import WorkItem from '../work/WorkItem';
// import Publications from '../publications/Publications';

const Routes = () => (
  <Router>
    <App />
    {/* 
      
      <Route path="work/:link" component={WorkItem} />
      
      <Route path="publications" component={Publications} />
       */}
  </Router>
);

export default Routes;
