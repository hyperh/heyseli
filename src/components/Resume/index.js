import React from 'react';

import data from './data';
import styles from './styles.scss';

const { experience, education } = data;

const Resume = () => (
  <div className={styles.wrapper}>
    <div>
      <h1>Experience</h1>
      {
        experience.map(x => {
          const { title, company, time } = x;
          return (<p key={company} className={styles.exp}>
            <b>{title}</b>, {company}, <i>{time}</i>
          </p>);
        })
      }
    </div>

    <div>
      <h1>Education</h1>
      {
        education.map(x => {
          const { school, type, faculty, gradYear } = x;
          return (<p key={type}>
            <b>{type}</b>, {school}, {faculty}, <i>{gradYear}</i>
          </p>);
        })
      }
    </div>
  </div>
);

export default Resume;
