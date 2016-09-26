import React from 'react';

import styles from './Sidebar.scss';

const Sidebar = () => (
  <div className={styles.wrapper}>
    <div className={styles.name}>Heyse Li</div>
    <div className={styles.item}>Contact</div>
    <div className={styles.item}>Work</div>
  </div>
);

export default Sidebar;
