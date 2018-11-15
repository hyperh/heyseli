import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// import WorkItem from '../work/WorkItem';

const Routes = () => (
  <Router>
    <App />
    {/* 
      
      <Route path="work/:link" component={WorkItem} />
      
      
       */}
  </Router>
);

export default Routes;
