import PropTypes from 'prop-types';
import React from 'react';

const Tags = ({ tags }) => (
  <p>
    <i>Tags: </i>
    {tags.sort().join(', ')}
  </p>
);

Tags.propTypes = {
  tags: PropTypes.array.isRequired
};

export default Tags;
