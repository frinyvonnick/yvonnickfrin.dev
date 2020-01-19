import React from "react"
import { Styled, css } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => {
  const { allBlogPost: { edges } } = useStaticQuery(
    graphql`
      query getPostData {
        allBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )
  const { node: { slug } } = edges.find(({ node }) => node.id === post.id)
  const editLink = `https://github.com/frinyvonnick/yvonnickfrin.dev/edit/master/content/posts${slug}.mdx`

  return (
    <Layout location={location} title={title}>
      <SEO title={post.title} description={post.excerpt} />
      <main>
        <Styled.h1>{post.title}</Styled.h1>
        <Styled.p
          css={css({
            fontSize: 1,
            mt: -3,
            mb: 3,
          })}
        >
          {post.date}
        </Styled.p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Styled.div
          css={css({
            fontSize: 2,
            color: `secondary`,
            backgroundColor: `highlight`,
            padding: '2',
            borderRadius: '5px',
          })}
        >
          <Styled.h3>Found a typo or you want to suggest improvements?</Styled.h3>
          <Styled.p css={css({ marginBottom: 0 })}>Feel free to <Styled.a href={editLink}>edit</Styled.a> this article on GitHub.</Styled.p>
        </Styled.div>
      </main>
      <PostFooter {...{ previous, next }} />
    </Layout>
  )
}

export default Post
