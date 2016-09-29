import React from 'react';

import styles from './styles.scss';

import data from './data';

const getCiteChicago = bibtex => {
  const { author, title, journal, conference, number, pages, year } = bibtex;
  return (
    <li>
      {author}.&nbsp;
      "{title}".&nbsp;
      {journal ? <i>{journal}</i> : null}
      {number ? ` no. ${number} ` : null}
      {conference ? <i>{`${conference} `}</i> : null}
      ({year})
      {pages ? `: ${pages}` : null}
      .
    </li>
  );
};

/* eslint-disable max-len */
const Publications = () => (
  <div className={styles.wrapper}>
    <p>I used to be in academia. Here are the papers I published during my time there.</p>
    {data.map(datum => <div>
      <h1>{datum.type}</h1>
      <ol>
        {datum.items.map(item => getCiteChicago(item))}
      </ol>
    </div>)}
  </div>
);

export default Publications;
