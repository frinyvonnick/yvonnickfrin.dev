import React from 'react'

export function ExternalLink({ to, children, ...props }) {
  return (
    <a {...props} href={to}>{children}</a>
  )
}
