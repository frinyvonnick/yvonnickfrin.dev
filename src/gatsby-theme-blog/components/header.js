import React from 'react'
import { Link } from "gatsby"
import { css, Styled } from "theme-ui"

import Header from 'gatsby-theme-blog/src/components/header'

import { SocialIcons } from '../../components/SocialIcons'

import './header.css'

export default props => {
  return (
    <>
      <SocialIcons />
      <Header {...props} />
      <div
        css={css({
          position: 'relative',
          maxWidth: `container`,
          mx: `auto`,
        })}
      >
        <nav>
          <Link className={!props.location.pathname.includes('/streams') ? 'selected' : ''} to="/">Blog</Link>
          <Link className={props.location.pathname.includes('/streams') ? 'selected' : ''} to="/streams">Streaming</Link>
        </nav>
      </div>
    </>
  )
}
