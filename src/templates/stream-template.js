import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import { Stream } from '../components/Stream'

import Layout from '../gatsby-theme-blog/components/layout'

function truncate(str, n){
  return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
}

export default function Template({
  data,
  ...props
}) {
  console.log(data, props)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout {...props} title="Yvonnick Frin">
      <Helmet
        htmlAttributes={{
          lang: 'fr'
        }}
        title={frontmatter.title}
        meta={[
          {
            property: "og:title",
            content: truncate(frontmatter.title, 70),
          },
          {
            property: "og:description",
            content: truncate(frontmatter.title, 200),
          },
          {
            property: "og:image",
            content: `https://yvonnickfrin.dev${frontmatter.path}.jpg`,
          },
          {
            property: "og:type",
            content: "website"
          },
          {
            property: "og:url",
            content: `https://yvonnickfrin.dev${frontmatter.path}` 
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
            content: truncate(frontmatter.title, 70),
          },
          {
            name: "twitter:description",
            content: truncate(frontmatter.title, 200),
          },
          {
            name: "twitter:image",
            content: `https://yvonnickfrin.dev${frontmatter.path}.jpg`,
          }
        ]}
      />
      <Stream
        {...frontmatter}
        description={html}
      />
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
        startHour
        endHour
        duration
      }
    }
  }
`
