import React, { useState } from "react"
import { Link } from "gatsby"

import "./Nav.css"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIsOpen = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }
  return (
    <>
      <span hidden id="menu-label">
        Main menu
      </span>
      <button
        aria-expanded={isOpen}
        className={`menu-toggle ${isOpen ? "active" : ""}`}
        aria-labelledby="menu-label"
        onClick={toggleIsOpen}
      >
        ☰
      </button>
      <nav
        className={`menu ${isOpen ? "active" : ""}`}
        aria-labelledby="menu-label"
      >
        <ul>
          <li>
            <Link onClick={toggleIsOpen} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={toggleIsOpen} to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link onClick={toggleIsOpen} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
