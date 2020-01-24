import React from "react"
import { Styled, css, useColorMode } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"

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
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const { allBlogPost: { edges: posts }, allGithubProject: { edges: projects } } = useStaticQuery(
    graphql`
      query getPostData {
        allBlogPost {
          edges {
            node {
              id
              slug
              tags
            }
          }
        }
        allGithubProject {
          edges {
            node {
              id
              name
              description
            }
          }
        }
      }
    `
  )
  const { node: { slug, tags } } = posts.find(({ node }) => node.id === post.id)
  const editLink = `https://github.com/frinyvonnick/yvonnickfrin.dev/edit/master/content/posts${slug}.mdx`

  const relatedProjects = projects
    .map(({ node }) => node)
    .filter(({ name }) => tags.includes(name))

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
      <Styled.h2
        css={css({
          marginTop: `40px`,
        })}
      >
        Related projects
      </Styled.h2>
      {relatedProjects.map(project => (
        <article key={project.id}>
          <Styled.h3
            css={css({
              marginBottom: 0,
            })}
          >
            <Styled.a
              as={Link}
              css={css({
                color: `inherit`,
              })}
              to={`/projects/${project.name}`}
            >
              {project.name}
            </Styled.a>
          </Styled.h3>
          <p>{project.description}</p>
          <Styled.div
            css={css({
              display: 'flex',
              justifyContent: 'flex-end',
            })}
          >
            <Styled.a
              as={Link}
              css={css({
                boxShadow: `none`,
                textDecoration: `none`,
                color: isDark ? `#232129` : `white`,
                backgroundColor: `primary`,
                padding: `5px 15px`,
              })}
              to={`/projects/${project.name}`}
            >
              Read more
            </Styled.a>
          </Styled.div>
        </article>
      ))}
    </Layout>
  )
}

export default Post
