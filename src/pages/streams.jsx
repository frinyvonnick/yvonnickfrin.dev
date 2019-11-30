import React from 'react'
import { graphql } from 'gatsby'

import { Stream } from '../components/Stream'

import Layout from '../gatsby-theme-blog/components/layout'

import './streams.css'

function compareDates(da, db) {
  da.setHours(0, 0, 0, 0)
  db.setHours(0, 0, 0, 0)

  return da - db
}

export default function({ data, ...props }) {
  const streams = data.allMarkdownRemark.edges.map(({ node }) => node)

  const pastStreams = streams.filter(s => compareDates(new Date(s.frontmatter.date), new Date()) < 0)
  const [nextStream, ...futureStreams] = streams.filter(s => compareDates(new Date(s.frontmatter.date), new Date()) >= 0)
  return (
    <Layout {...props} title="Yvonnick Frin">
      <div className="streams">
        <h2>Prochain stream</h2>
        <Stream
          {...nextStream.frontmatter}
          description={nextStream.html}
        /> 
      </div>
      <div className="streams">
        <h2>Streams à venir</h2>
        {futureStreams.map(stream => (
          <Stream
            key={stream.frontmatter.title}
            {...stream.frontmatter}
            description={stream.html}
          /> 
        ))}        
      </div>
      <div className="streams">
        <h2>Précédents streams</h2>
        {pastStreams.map(stream => (
          <Stream
            key={stream.frontmatter.title}
            {...stream.frontmatter}
            description={stream.html}
          /> 
        ))}        
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allMarkdownRemark(
    sort: { order: ASC, fields: [frontmatter___date] }
  ) {
    edges {
      node {
        frontmatter {
          path
          date
          title
          startHour
          endHour
          duration
        }
        html
      }
    }
  }
}
`
