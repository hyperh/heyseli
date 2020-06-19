import React from 'react';
import styled from 'styled-components';
import Page from '../core/Page';
import { bodyFont } from '../core/fonts';

const Text = styled.p`
  font-family: ${bodyFont};
  font-weight: 300;
`;

const Page404 = () => (
  <Page>
    <h1>:(</h1>
    <Text>{`Sorry, can't find that page.`}</Text>
  </Page>
);

export default Page404;
