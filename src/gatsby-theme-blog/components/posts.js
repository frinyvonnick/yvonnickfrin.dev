import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Posts from 'gatsby-theme-blog/src/components/posts'

function truncate(str, n){
  return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
}

export default props => {
  const { site: { siteMetadata } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'fr'
        }}
        title={siteMetadata.title}
        meta={[
          {
            property: "title",
            content: truncate(siteMetadata.title, 70),
          },
          {
            property: "description",
            content: truncate(siteMetadata.title, 200),
          },
          {
            property: "og:title",
            content: truncate(siteMetadata.title, 70),
          },
          {
            property: "og:description",
            content: truncate(siteMetadata.title, 200),
          },
          {
            property: "og:image",
            content: `https://yvonnickfrin.dev/home.jpg`,
          },
          {
            property: "og:type",
            content: "website"
          },
          {
            property: "og:url",
            content: `https://yvonnickfrin.dev` 
          },
          {
            property: "og:site_name",
            content: 'Yvonnick FRIN\'s website'
          },
          {
            name: "twitter:card",
            content: "summary_large_image"
          },
          {
            name: "twitter:creator",
            content: '@YvonnickFrin'
          },
          {
            name: "twitter:title",
            content: truncate(siteMetadata.title, 70),
          },
          {
            name: "twitter:description",
            content: truncate(siteMetadata.title, 200),
          },
          {
            name: "twitter:image",
            content: `https://yvonnickfrin.dev/home.jpg`,
          }
        ]}
      />
      <Posts {...props} />
    </>
  )
}
