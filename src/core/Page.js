import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Content from './Content';
import GlobalStyle from './GlobalStyle';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
  max-width: 55rem;
  background-color: var(--backgroundColor);

  /* Center the page */
  margin-left: auto;
  margin-right: auto;

  /* Border and shadow */
  box-shadow: rgba(0, 0, 0, 0.2) 0 0.125rem 0.3125rem 0;
  border: 0.0625rem solid rgba(255, 255, 255, 0.1);
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
