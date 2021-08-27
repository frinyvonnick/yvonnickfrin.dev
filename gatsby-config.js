module.exports = {
  siteMetadata: {
    siteUrl: "https://yvonnickfrin.dev",
    title: `Yvonnick Frin`,
    author: `Yvonnick Frin`,
    description: `Articles, Streams and Talks about JavaScript and its ecosystem.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/YvonnickFrin`,
      },
      {
        name: `github`,
        url: `https://github.com/frinyvonnick`,
      },
    ],
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        icon: `${__dirname}/src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-66760805-2",
        anonymize: true,
        respectDNT: true,
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://yvonnickfrin.dev",
        sitemap: "https://yvonnickfrin.dev/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
