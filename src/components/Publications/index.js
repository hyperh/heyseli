import React from 'react';

import CitationChicago from './CitationChicago';
import Tags from './Tags';
import styles from './styles.scss';
import data from './data';

/* eslint-disable max-len */
const Publications = () => (
  <div className={styles.wrapper}>
    <p>
      I used to be in academia.
      Here are the papers I published during my time there.
      If you would like a copy, please contact me.
    </p>
    {data.map(datum => <div key={datum.type}>
      <h1>{datum.type}</h1>
      <ol>
        {datum.items.map(item => {
          const { author, title, journal, conference, number, pages, year, tags } = item;
          return (
            <div>
              <CitationChicago
                key={title}
                author={author}
                title={title}
                journal={journal}
                conference={conference}
                number={number}
                pages={pages}
                year={year}
              />
              <Tags tags={tags} />
            </div>
          );
        })}
      </ol>
    </div>)}
  </div>
);

export default Publications;
