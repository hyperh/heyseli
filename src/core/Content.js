import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 37em;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = ({ children }) => <Wrapper>{children}</Wrapper>;

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
