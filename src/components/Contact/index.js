import React from 'react';

import styles from './styles.scss';

import data from './data';

/* eslint-disable max-len */
const Contact = () => (
  <div className={styles.wrapper}>
    <p>Hi! Thanks for visiting. I'm Heyse and I like to draw, design, do math, and program things.</p>
    <p>If you would like to learn more about me and how I can help you, you can contact me at {data.email}.</p>
  </div>
);

export default Contact;
