import React from "react"
import { Link } from "gatsby"
import Highlight from "react-highlight"

import "highlight.js/styles/base16/solarized-light.css"

import Layout from "../components/Layout"

export default function Template({ pageContext }) {
  const { title, date, html } = pageContext

  return (
    <Layout>
      <h1 className="post__title">{title}</h1>
      <p className="publication-date">
        Published on{" "}
        <time dateTime={date}>
          {new Intl.DateTimeFormat().format(new Date(date))}
        </time>
      </p>
      <div className="post__content">
        <Highlight innerHTML>{html}</Highlight>
      </div>
    </Layout>
  )
}
