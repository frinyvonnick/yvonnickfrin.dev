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
  const { githubProject: { repository } } = data
  const { name, description, url, path } = repository

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
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
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
