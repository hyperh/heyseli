import React from 'react';
import sortBy from 'lodash/fp/sortBy';
import reverse from 'lodash/fp/reverse';

import CitationChicago from './CitationChicago';
import Tags from './Tags';
import styles from './styles.scss';
import data from './data';

/* eslint-disable max-len, global-require */
const sortByYear = sortBy(o => o.year);
const sortByYearDesc = objs => reverse(sortByYear(objs));

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
        {sortByYearDesc(datum.items).map(item => {
          const { author, title, journal, conference, number, pages, year, tags, filename } = item;
          return (
            <div key={title}>
              <li>
                <CitationChicago
                  author={author}
                  title={title}
                  journal={journal}
                  conference={conference}
                  number={number}
                  pages={pages}
                  year={year}
                />
                <Tags tags={tags} />
                {filename ? <a href={require(`../../assets/papers/${filename}`)}>Download PDF</a> : null}
              </li>
            </div>
          );
        })}
      </ol>
    </div>)}
  </div>
);

export default Publications;
