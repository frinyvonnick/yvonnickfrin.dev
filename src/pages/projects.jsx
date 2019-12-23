import React from "react"
import { graphql, Link } from "gatsby"
import { css, useColorMode, Styled } from "theme-ui"
import GitHubButton from 'react-github-btn'

import { Github } from '../components/SocialIcons'
import { ExternalLink } from '../components/ExternalLink'

import Layout from '../gatsby-theme-blog/components/layout'

import './projects.css'

export default function ({
  data,
  ...props
}) {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`

  const { allGithubProject: { edges } } = data
  const githubProjects = edges.map(({ node }) => node.repository)

  return (
    <Layout {...props} title="Yvonnick Frin">
      <h1 className="projects-title">GitHub projects</h1>
      <p className="projects-subtitle">Here is a non exhaustive list of open source projects I work on.</p>
      {githubProjects.map(githubProject => (
        <article key={githubProject.name} className="project">
          <Styled.h2
            css={css({
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
              borderColor: `primary`,
            })}
          >
            <Styled.a
              as={Link}
              css={css({
                color: `inherit`,
              })}
              to={githubProject.path}
            >
              {githubProject.name}
            </Styled.a>
            <GitHubButton href={githubProject.url} data-icon="octicon-star" data-show-count="true" aria-label={`Star ${githubProject.url} on GitHub`}>Star</GitHubButton>
          </Styled.h2>
          <p>{githubProject.description}.</p>
          <div className="project-links">
            <Styled.a
              as={ExternalLink}
              className="github-link"
              css={css({
                color: `inherit`,
              })}
              to={githubProject.url}
            >
              <Github className="project-icon" />View repository
            </Styled.a>
            <Styled.a
              as={Link}
              css={css({
                boxShadow: `none`,
                textDecoration: `none`,
                color: isDark ? `#232129` : `white`,
                backgroundColor: `primary`,
                padding: `5px 15px`,
              })}
              to={githubProject.path}
            >
              Read more
            </Styled.a>
          </div>
        </article>
      ))}
    </Layout>
  )
}
export const query = graphql`
{
  allGithubProject {
    edges {
      node {
        repository {
          path
          name
          url
          description
        }
      }
    }
  }
}
`

