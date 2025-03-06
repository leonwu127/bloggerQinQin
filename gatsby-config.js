/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `BloggerQinQin`,
    description: `A personal blog built with Gatsby`,
    author: `QinQin`,
    siteUrl: `https://bloggerqinqin.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
} 