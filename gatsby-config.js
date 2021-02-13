module.exports = {
  siteMetadata: {
    title: `Development Blog`,
    description: `Web blog to post my development journey`,
    author: `Nicholas`,
  },
  pathPrefix: "/portfolio-blog",
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `content`,
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-background-image`,
      options: {
        name: `background`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tech-blog`,
        short_name: `tech-blog`,
        start_url: `/`,
        background_color: `#1e2127`,
        theme_color: `#1e2127`,
        display: `minimal-ui`,
        icon: `src/images/logo/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-codefence`, `gatsby-remark-katex`],
      },
    },
  ],
}
