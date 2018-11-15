import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  width: 12em;
  height: 12em;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const noImg = `
border: 2px solid gray;
border-radius: 20px;
`;

const Image = styled.div`
  width: 7em;
  height: 7em;
  overflow: hidden;

  // prettier-ignore
  ${props => (props.previewImg ? '' : noImg)}

  img {
    width: 100%;
    height: 100%;
  }
`;

const Name = styled.div`
  padding: 1em;
  text-align: center;
`;

const WorkPreview = ({ name, platform, link, previewImg }) => (
  <Wrapper>
    <Link to={`/work/${link}`}>
      <Image previewImg={previewImg}>
        {previewImg && <img src={previewImg} alt={name} />}
      </Image>
    </Link>
    <Name>{name}</Name>
    <div>{platform}</div>
  </Wrapper>
);

WorkPreview.propTypes = {
  name: PropTypes.string.isRequired,
  platform: PropTypes.array,
  link: PropTypes.string,
  previewImg: PropTypes.string
};

export default WorkPreview;
