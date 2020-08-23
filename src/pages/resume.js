import React from 'react';
import Resume from '../resume/Resume';
import Page from '../core/Page';
import SEO from '../core/SEO';

const ResumePage = () => (
  <Page>
    <SEO title="Resume" />
    <Resume />
  </Page>
);

export default ResumePage;
