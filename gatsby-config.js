/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Fabio Arazaki`,
    description: `Somewhere I keep my stuff and thoughts.`,
    siteUrl: `https://arazaki.github.io`,
    image: `/icon.png`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "projects",
        path: `${__dirname}/src/data/projects.json`, // path where project json data is stored
      },
    },
  ],
};
