/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpeg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div>
          <p>
            Lead developer at <a href="https://pix.fr/">Pix</a>.<br /> I'm{" "}
            <a href="https://nantesjs.org/">NantesJS</a> co-organizer on my
            spare time.
          </p>
          <p>
            <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
            &nbsp;.&nbsp;
            <a href={`https://github.com/${social.github}`}>Github</a>
          </p>
        </div>
      )}
    </div>
  )
}

export default Bio
