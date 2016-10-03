import React, { PropTypes } from 'react';

// Bibtex formatted author: Last, First M and Last2, First2 M2
const authorsWithBold = (authorStr, boldAuthor) => {
  const authors = authorStr.split(' and ');
  const boldIndex = authors.findIndex(author => author === boldAuthor);
  const before = authors.slice(0, boldIndex);
  const after = authors.slice(boldIndex + 1, authors.length);

  return (
    <span>
      {before.join(' and ')}
      {boldIndex !== 0 ? ' and ' : null}
      <b>{boldAuthor}</b>
      {boldIndex !== authors.length - 1 ? ' and ' : null}
      {after.join(' and ')}
    </span>
  );
};

const CitationChicago = ({ author, title, journal, conference, number, pages, year }) => (
  <p>
    {authorsWithBold(author, 'Li, Heyse')}.&nbsp;
    "{title}".&nbsp;
    {journal ? <i>{journal}</i> : null}
    {number ? ` no. ${number} ` : null}
    {conference ? <i>{`${conference} `}</i> : null}
    ({year})
    {pages ? `: ${pages}` : null}
    .
  </p>
);

CitationChicago.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  journal: PropTypes.string,
  conference: PropTypes.string,
  number: PropTypes.string,
  pages: PropTypes.string,
  year: PropTypes.string.isRequired,
};

export default CitationChicago;
