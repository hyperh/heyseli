import React, { PropTypes } from 'react';

const CitationChicago = ({ author, title, journal, conference, number, pages, year }) => (
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
