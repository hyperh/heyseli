import React from 'react';

import styles from './styles.scss';

import data from './data';
import HiddenEmail from './HiddenEmail';

/* eslint-disable max-len */
const { email, twitter, medium, github } = data;
const Contact = () => (
  <div className={styles.wrapper}>
    <p>Hi! Thanks for visiting. I'm Heyse and I like to draw, design, do math, and program things.</p>
    <p>If you would like to learn more about me and how I can help, you can contact me at <b><i><HiddenEmail email={email} /></i></b>.</p>
    <p>
      You can also follow me on <a href={twitter}>Twitter</a> and <a href={medium}>Medium</a>.
      I write about things on Medium from time to time, mostly about issues that I encounter when programming and how I solved it.
    </p>
    <p>
      I also have a <a href={github}>Github</a> account, where you can view samples of my code and the contributions I have made to the open source community.
    </p>
  </div>
);

export default Contact;
