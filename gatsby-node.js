const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Find all data.js files in work/content
  const result = await graphql(`
    query WorkItems {
      allFile(
        filter: {
          extension: { eq: "js" }
          relativeDirectory: { regex: "work/content/" }
          name: { eq: "data" }
        }
      ) {
        edges {
          node {
            relativePath
            relativeDirectory
          }
        }
      }
    }
  `);

  result.data.allFile.edges.forEach(({ node }) => {
    const split = node.relativeDirectory.split('/');
    const folderName = split[split.length - 1];

    createPage({
      path: `/work/${folderName}`,
      component: path.resolve(`./src/work/WorkItemPage.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        folderName,
      },
    });
  });
};
