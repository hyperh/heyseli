import React from 'react';
import Publications from '../publications/Publications';
import Page from '../core/Page';
import SEO from '../core/SEO';

const PublicationsPage = () => (
  <Page>
    <SEO title="Publications" />
    <Publications />
  </Page>
);

export default PublicationsPage;
