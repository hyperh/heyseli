import PropTypes from 'prop-types';
import React from 'react';

const ExternalLink = ({ to, children, ...rest }) => (
  <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
    {children}
  </a>
);

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default ExternalLink;
