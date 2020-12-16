module.exports = {
  plugins: [
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://yvonnickfrin.dev',
        sitemap: 'https://yvonnickfrin.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    siteUrl: 'https://yvonnickfrin.dev',
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
}
