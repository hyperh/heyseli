import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Content from './Content';
import useDarkMode from 'use-dark-mode';
import GlobalStyle from './GlobalStyle';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const Page = ({ children }) => {
  const darkMode = useDarkMode(false);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div>
          <Sidebar />
          <button onClick={darkMode.toggle}>Toggle</button>
        </div>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
