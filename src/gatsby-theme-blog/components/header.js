import React from 'react'

import Header from 'gatsby-theme-blog/src/components/header'

import { SocialIcons } from '../../components/SocialIcons'

export default props => {
  return (
    <>
      <SocialIcons />
      <Header {...props} />
    </>
  )
}
