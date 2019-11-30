module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `streams`,
        path: `${__dirname}/content/streams`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-66760805-2",
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-sitemap',
  ],
  siteMetadata: {
    siteUrl: 'https://yvonnickfrin.dev',
    title: `Yvonnick Frin`,
    author: `Yvonnick Frin`,
    description: `Yvonnick Frin's blog`,
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
}
