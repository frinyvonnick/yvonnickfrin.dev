import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Post from "../components/Post"

const Blog = ({ data }) => (
  <Layout>
    <h1>Blog</h1>
    {data.allMarkdownRemark.edges.map(post => {
      const { excerpt } = post.node
      const { title, date } = post.node.frontmatter
      const { id, name } = post.node.parent

      return (
        <Post
          key={id}
          title={title}
          date={date}
          excerpt={excerpt}
          path={`/${name}`}
        />
      )
    })}
  </Layout>
)

export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            date
            title
          }
          parent {
            ... on File {
              id
              name
            }
          }
        }
      }
    }
  }
`

export default Blog
