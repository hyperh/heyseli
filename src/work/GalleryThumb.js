import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const imgSide = '20em';
const Wrapper = styled.div`
  width: ${imgSide};
  height: ${imgSide};
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    padding: 2em;
    cursor: pointer;
  }
`;

class GalleryThumb extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { onClick, index } = this.props;
    onClick(index);
  }

  render() {
    const { src } = this.props;
    return (
      <Wrapper key={src}>
        <img src={src} alt="" onClick={this.onClick} />
      </Wrapper>
    );
  }
}

GalleryThumb.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number,
  onClick: PropTypes.func
};

export default GalleryThumb;
