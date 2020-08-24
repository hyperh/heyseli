import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import ExternalLink from '../core/ExternalLink';

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Platforms = styled.p`
  color: var(--secondaryText);
`;

const headerImgSide = '7em';
const HeaderImg = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 2em;

  img {
    width: ${headerImgSide};
    height: ${headerImgSide};
  }
`;

const getHeaderImg = (headerImg) =>
  headerImg ? (
    <HeaderImg>
      <img src={headerImg} alt="header" />
    </HeaderImg>
  ) : null;

const WorkItemHeader = ({ name, platforms, url, headerImg }) => (
  <Wrapper>
    {getHeaderImg(headerImg)}
    <div>
      <h1>{name}</h1>
      <Platforms>{platforms.join(', ')}</Platforms>
      {typeof url === 'string' && <ExternalLink to={url}>Link</ExternalLink>}
      {Array.isArray(url) &&
        url.map((u) => (
          <p key={u.name}>
            <ExternalLink to={u.value}>{u.name}</ExternalLink>
          </p>
        ))}
    </div>
  </Wrapper>
);

WorkItemHeader.propTypes = {
  name: PropTypes.string,
  platforms: PropTypes.array,
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  imgFolder: PropTypes.string,
  headerImg: PropTypes.string,
};

export default WorkItemHeader;
