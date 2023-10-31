const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // graphql query to retrieve all json data as specified in gatsby-config.js
  // src/data
  const result = await graphql(`
    query {
      allProjectsJson {
        nodes {
          slug
          image
        }
      }
    }
  `);

  // create a page for each json data
  result.data.allProjectsJson.nodes.forEach((page) => {
    createPage({
      path: `/portfolio/${page.slug}`,
      component: path.resolve("./src/templates/Project/index.js"),
      context: {
        slug: page.slug,
        image: page.image,
      },
    });
  });
};
