import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import styled from 'styled-components';
import GalleryThumb from './GalleryThumb';

const Thumbs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class Gallery extends Component {
  state = {
    isOpen: false,
    currentImage: 0,
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { images } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        <Thumbs>
          {images.map((image, index) => (
            <GalleryThumb
              key={image.source}
              src={image.source}
              index={index}
              onClick={this.toggleModal}
            />
          ))}
        </Thumbs>

        <ModalGateway>
          {isOpen && (
            <Modal onClose={this.toggleModal}>
              <Carousel views={images} />
            </Modal>
          )}
        </ModalGateway>
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Gallery;
