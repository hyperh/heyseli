import React, { Component, PropTypes } from 'react';
import Lightbox from 'react-images';

// eslint-disable-next-line react/prefer-stateless-function
class Gallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <Lightbox images={images} isOpen={true} />
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Gallery;
