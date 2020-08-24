import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Content from './Content';
import GlobalStyle from './GlobalStyle';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Page = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Sidebar />

        <Content>{children}</Content>
      </Wrapper>
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
