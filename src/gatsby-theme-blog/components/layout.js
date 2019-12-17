import React, { useEffect, useState } from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"
import GitHubButton from 'react-github-btn'

import './layout.css'

export const LocationContext = React.createContext()

export default ({ children, ...props }) => {
  const [pinnedRepositories, setPinnedRepositories] = useState([])
  useEffect(() => {
    fetch('https://europe-west1-blog-256318.cloudfunctions.net/pinned-repositories')
      .then(res => res.json())
      .then(({ user }) => {
        setPinnedRepositories(user.pinnedItems.nodes.map(({ __typename, ...item }) => {
          return {
            ...item,
            stargazers: item.stargazers.totalCount,
            primaryLanguage: item.primaryLanguage.name,
          }
        }))
      })
  }, [])
  return (
    <LocationContext.Provider value={{ location: props.location }}>
      <Styled.root>
        <Header {...props} />
        <div>
          <div
            css={css({
              position: 'relative',
              maxWidth: `container`,
              mx: `auto`,
              px: 3,
              py: 4,
            })}
          >
            {children}
            <div className="projects">
              <Styled.hr className="separator" />
              <Styled.h3>Projects</Styled.h3>
              <Styled.ul css={css({ listStyle: 'none', margin: 0 })}>
                {pinnedRepositories.map(project => (
                  <Styled.li key={project.name} css={css({ paddingBottom: '10px' })}>
                    <Styled.h4 css={css({ marginBottom: '10px' })}>{project.name}</Styled.h4>
                    <GitHubButton href={project.url} data-icon="octicon-star" data-show-count="true" aria-label={`Star ${project.url} on GitHub`}>Star</GitHubButton>
                    <Styled.p>{project.description}</Styled.p>
                  </Styled.li>
                ))}
              </Styled.ul>
            </div>
          </div>
        </div>
      </Styled.root>
    </LocationContext.Provider>
  )
}
