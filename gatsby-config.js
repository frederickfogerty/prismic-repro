module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,

        accessToken: process.env.PRISMIC_ACCESS_TOKEN,

        schemas: {
          page: require("./config/prismic/schemas/page.json"),
          menu: require("./config/prismic/schemas/menu.json"),
          homepage: require("./config/prismic/schemas/page.json"),
        },

        imageImgixParams: {
          auto: "compress,format",
          fit: "max",
          q: 50,
        },

        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
