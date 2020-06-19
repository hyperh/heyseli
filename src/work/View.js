import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  max-width: 80%;
  max-height: 90vh;
`;

const View = (props) => {
  console.log(props);
  return (
    <Wrapper>
      <Img src={props.currentView.source} />
    </Wrapper>
  );
};
View.propTypes = {
  currentView: PropTypes.object,
};

export default View;
