import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"

import './layout.css'

export const LocationContext = React.createContext()

export default ({ children, ...props }) => {
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
          </div>
        </div>
      </Styled.root>
    </LocationContext.Provider>
  )
}
