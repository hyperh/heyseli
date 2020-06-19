import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import styled from 'styled-components';
import GalleryThumb from './GalleryThumb';
import View from './View';

const Thumbs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const customStyles = {
  view: (base) => ({
    ...base,
    height: '100vh',
  }),
};

const components = {
  View,
};

class Gallery extends Component {
  state = {
    isOpen: false,
    currentIndex: 0,
  };

  toggleModal = (index) => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
      currentIndex: index,
    }));
  };

  render() {
    const { images } = this.props;
    const { isOpen, currentIndex } = this.state;
    return (
      <div>
        <Thumbs>
          {images.map((image, index) => (
            <GalleryThumb
              key={image.source}
              src={image.source}
              index={index}
              onClick={() => this.toggleModal(index)}
            />
          ))}
        </Thumbs>

        <ModalGateway>
          {isOpen && (
            <Modal onClose={this.toggleModal}>
              <Carousel
                styles={customStyles}
                views={images}
                currentIndex={currentIndex}
                modalProps={{ preventScroll: false }}
                components={components}
              />
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
