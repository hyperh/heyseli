import React, { Component } from 'react';

import Sidebar from './core/Sidebar';
import styles from './App.scss';
import Work from './Work';

class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.app}>
        <Sidebar />
        <Work />
      </div>
    );
  }
}

export default App;
