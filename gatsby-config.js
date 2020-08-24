/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    defaultTitle: 'Heyse Li',
    titleTemplate: 'Heyse Li | %s', // title prop will be put in %s, if no title prop, defaultTitle is used
    defaultDescription: 'A porfolio page.',
    siteUrl: 'https://heyseli.com',
    twitterUsername: '@liheyse',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    // Need this to do styled components properly
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-83610232-2',
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-dark-mode',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/core/utils/typography`,
      },
    },
  ],
};
