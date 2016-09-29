import React from 'react';

import styles from './styles.scss';

import data from './data';

/* eslint-disable max-len */
const Contact = () => (
  <div className={styles.wrapper}>
    <p>Hi! Thanks for visiting. I'm Heyse and I like to draw, design, do math, and program things.</p>
    <p>If you would like to learn more about me and how I can help, you can contact me at {data.email}.</p>
    <p>
      You can also follow me on Twitter and Medium.
      I write about things on Medium from time to time,
      mostly about issues that I encounter when programming and how I solved it.
    </p>
  </div>
);

export default Contact;
