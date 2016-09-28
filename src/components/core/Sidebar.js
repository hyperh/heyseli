import React from 'react';
import { Link } from 'react-router';

import styles from './Sidebar.scss';

const Sidebar = () => (
  <div className={styles.wrapper}>
    <div className={styles.name}>Heyse Li</div>
    <div className={styles.links}>
      <div className={styles.item}><Link to="/contact">Contact</Link></div>
      <div className={styles.item}><Link to="/work">Work</Link></div>
      <div className={styles.item}><Link to="/publications">Publications</Link></div>
    </div>
  </div>
);

export default Sidebar;
