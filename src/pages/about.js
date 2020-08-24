import React from 'react';
import Contact from '../about/About';
import Page from '../core/Page';
import SEO from '../core/SEO';

const AboutPage = () => (
  <Page>
    <SEO title="About" />
    <Contact />
  </Page>
);

export default AboutPage;
