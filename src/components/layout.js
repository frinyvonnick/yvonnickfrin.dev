import React from "react"

import Nav from "./Nav"

import "./Layout.css"

const Layout = ({ children, className }) => (
  <div className="layout">
    <Nav />
    <main className={className}>{children}</main>
  </div>
)

export default Layout
