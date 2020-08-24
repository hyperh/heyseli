import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import IconWrapper from './IconWrapper';

const Text = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const StyledH2 = styled.h2`
  margin-bottom: 0.5rem;
`;

const IntroLink = ({ Icon, header, desc, url, Link }) => (
  <Link to={url}>
    <IconWrapper>
      <Icon />
    </IconWrapper>
    <Text>
      <StyledH2>{header}</StyledH2>
      <div>{desc}</div>
    </Text>
  </Link>
);

IntroLink.propTypes = {
  Link: PropTypes.func,
  Icon: PropTypes.func,
  header: PropTypes.string,
  desc: PropTypes.string,
  url: PropTypes.string,
  external: PropTypes.bool,
};

export default IntroLink;
