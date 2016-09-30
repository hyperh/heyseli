import React, { PropTypes } from 'react';

const Tags = ({ tags }) => (
  <p>
    Tags: {tags.sort().join(', ')}
  </p>
);

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Tags;
