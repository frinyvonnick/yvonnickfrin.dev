module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
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
