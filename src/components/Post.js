import React from "react"
import { Link } from "gatsby"

const Post = ({ title, author, date, excerpt, path }) => (
  <article>
    <h2 className="post__title">
      <Link to={path}>{title}</Link>
    </h2>
    <p className="publication-date">
      Published on{" "}
      <time dateTime={date}>
        {new Intl.DateTimeFormat().format(new Date(date))}
      </time>
    </p>
    <p>
      {excerpt} <Link to={path}>read more</Link>
    </p>
  </article>
)

export default Post
