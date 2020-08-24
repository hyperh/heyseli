import React from 'react';
import Page from '../core/Page';
import SEO from '../core/SEO';

const Page404 = () => (
  <Page>
    <SEO title="Page not found" />
    <h1>:(</h1>
    <p>{`Sorry, can't find that page.`}</p>
  </Page>
);

export default Page404;
