import React from "react"
import { Helmet } from "react-helmet"
import { css, useColorMode, Styled } from "theme-ui"
import { graphql, Link } from "gatsby"
import GitHubButton from 'react-github-btn'

import { Github } from '../components/SocialIcons'
import { ExternalLink } from '../components/ExternalLink'

import Layout from '../gatsby-theme-blog/components/layout'

export default function Template({
  data,
  ...props
}) {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const { githubProject: { repository }, allBlogPost: { edges } } = data
  const { name, description, url, path } = repository
  const blogPosts = edges
    .map(e => e.node)
    .filter(blogPost => blogPost.tags.includes(name))

  return (
    <Layout {...props} title="Yvonnick Frin">
      <article key={name}>
        <Styled.h1
          css={css({
            borderColor: `primary`,
          })}
        >
          <Styled.a
            as={Link}
            css={css({
              color: `inherit`,
              marginRight: `10px`,
            })}
            to={path}
          >
            {name}
          </Styled.a>
          <GitHubButton href={url} data-icon="octicon-star" data-show-count="true" aria-label={`Star ${url} on GitHub`}>Star</GitHubButton>
        </Styled.h1>
        <p>{description}.</p>
        <Styled.a
          as={ExternalLink}
          className="github-link"
          css={css({
            color: `inherit`,
          })}
          to={url}
        >
          <Github className="project-icon" />View repository
        </Styled.a>
      </article>
      <Styled.h2
        css={css({
          marginTop: `40px`,
        })}
      >
        Related articles
      </Styled.h2>
      {blogPosts.map(blogPost => (
        <article>
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
              to={blogPost.slug}
            >
              {blogPost.title}
            </Styled.a>
          </Styled.h3>
          <p>{blogPost.excerpt}</p>
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
              to={blogPost.slug}
            >
              Read more
            </Styled.a>
          </Styled.div>
        </article>
      ))}
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    allBlogPost {
      edges {
        node {
          title
          slug
          excerpt
          tags
        }
      }
    }
    githubProject(repository: { path: { eq: $path } }) {
      repository {
        path
        name
        description
        url
      }
    }
  }
`
