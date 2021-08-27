import React from "react"

import Layout from "../components/Layout"

const About = () => (
  <Layout className="cover">
    <h1>About the author</h1>
    <p>I'm a french web developer located at Nantes in France.</p>
    <ul>
      <li>
        <a href="https://twitter.com/YvonnickFrin">Twitter</a>
      </li>
      <li>
        <a href="https://github.com/frinyvonnick">Github</a>
      </li>
    </ul>
    <h2>Crédits</h2>
    <p>
      Background texture by{" "}
      <a href="https://unsplash.com/@olga_o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Olga Thelavart
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/s/photos/paper-texture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Unsplash
      </a>
    </p>
  </Layout>
)

export default About
