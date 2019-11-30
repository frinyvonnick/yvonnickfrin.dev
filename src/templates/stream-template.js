import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import { Stream } from '../components/Stream'

import Layout from '../gatsby-theme-blog/components/layout'

export default function Template({
  data,
  ...props
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout {...props} title="Yvonnick Frin">
      <Helmet>
        <html lang="fr" />
      </Helmet>
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
