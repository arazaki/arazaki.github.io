/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Fabio Arazaki`,
    description: `Fabio Arazaki's personal website`,
    siteUrl: `https://arazaki.github.io`,
    image: `/fabio-smile.jpg`,
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
        icon: `${__dirname}/src/images/fabio-smile.jpg`,
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
