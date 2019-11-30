import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import { Stream } from '../components/Stream'

import Layout from '../gatsby-theme-blog/components/layout'

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
            content: frontmatter.title
          },
          {
            property: "og:description",
            content: frontmatter.title
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
            content: 'https://yvonnickfrin.dev' 
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
            content: 'Yvonnick FRIN'
          },
          {
            name: "twitter:title",
            content: frontmatter.title
          },
          {
            name: "twitter:description",
            content: frontmatter.title
          },
          {
            name: "twitter:image",
            content: `https://yvonnickfrin.dev/${frontmatter.path}.jpg`,
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
