import React from 'react';
import sortBy from 'lodash/fp/sortBy';
import reverse from 'lodash/fp/reverse';
import styled from 'styled-components';
import CitationChicago from './CitationChicago';
import Tags from './Tags';
import data from './data';
import ExternalLink from '../core/ExternalLink';

/* eslint-disable max-len, global-require */
const sortByYear = sortBy((o) => o.year);
const sortByYearDesc = (objs) => reverse(sortByYear(objs));

const Wrapper = styled.div`
  width: 100%;
`;

const Publications = () => (
  <Wrapper>
    <h1>Publications</h1>
    <p>
      I used to be in academia. Here are the papers I published during my time
      there.
    </p>
    {data.map((datum) => (
      <div key={datum.type}>
        <h2>{datum.type}</h2>
        <ol>
          {sortByYearDesc(datum.items).map((item) => {
            const {
              author,
              title,
              journal,
              conference,
              number,
              pages,
              year,
              tags,
              filename,
            } = item;
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
                  {filename ? (
                    <ExternalLink to={require(`./assets/${filename}`)}>
                      Download PDF
                    </ExternalLink>
                  ) : null}
                </li>
              </div>
            );
          })}
        </ol>
      </div>
    ))}
  </Wrapper>
);

export default Publications;
