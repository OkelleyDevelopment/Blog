module.exports = {
  siteMetadata: {
    title: `Development Blog`,
    description: `Web blog to post my development journey`,
    author: `Nicholas P. O'Kelley`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
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
        name: `images`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore dot files
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
        plugins: [
          `gatsby-remark-codefence`, 
          `gatsby-remark-katex`,
          {
            resolve: `gatsby-remark-embed-snippet`,
            options: {},
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
  ],
}
