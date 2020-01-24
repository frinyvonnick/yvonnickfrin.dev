import React from 'react'
import { Styled, css } from 'theme-ui'
import { Helmet } from "react-helmet"
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

  const pastStreams = streams
    .filter(s => compareDates(new Date(s.frontmatter.date), new Date()) < 0)
    .sort((a, b) => compareDates(new Date(b.frontmatter.date), new Date(a.frontmatter.date)))
  const [nextStream, ...futureStreams] = streams
    .filter(s => compareDates(new Date(s.frontmatter.date), new Date()) >= 0)
    .sort((a, b) => compareDates(new Date(a.frontmatter.date), new Date(b.frontmatter.date)))
  return (
    <Layout {...props} title="Yvonnick Frin">
      <Helmet>
        <html lang="fr" />
      </Helmet>
      <Styled.p css={css({ textAlign: 'justify' })}>
        Je streame principalement sur des technologies JavaScript. J'aime beaucoup l'open source je contribue donc sur quelques projets comme <Styled.a href="https://github.com/frinyvonnick/gitmoji-changelog">gitmoji-changelog</Styled.a>, <Styled.a href="https://github.com/charlyx/pair-roulette">pair-roulette</Styled.a>, <Styled.a href="https://github.com/bpetetot/conference-hall">conference-hall</Styled.a>, ...
      </Styled.p>
      <Styled.p css={css({ textAlign: 'justify' })}>
        Habituellement je streame le dimanche de 16h à 18h et le mardi de 20h à 22h. N'hésitez pas à suivre <Styled.a href="https://www.twitch.tv/yvonnickfrin">ma chaine Twitch</Styled.a> pour être averti lorsque le stream commence.
      </Styled.p>
      <div className="streams">
        <h2>Prochain stream</h2>
        {nextStream ? (
          <Stream
            {...nextStream.frontmatter}
            description={nextStream.html}
            calendar
            summary
          /> 
        ) : (
          <p>Aucun stream prévu pour le moment</p>
        )}
      </div>
      <div className="streams">
        <h2>Streams à venir</h2>
        {futureStreams.length ? futureStreams.map(stream => (
          <Stream
            key={stream.frontmatter.title}
            {...stream.frontmatter}
            description={stream.html}
            calendar
            summary
          /> 
        )) : (
          <p>Aucun stream prévu pour le moment</p>
        )}        
      </div>
      <div className="streams">
        <h2>Précédents streams</h2>
        {pastStreams.map(stream => (
          <Stream
            key={stream.frontmatter.title}
            {...stream.frontmatter}
            description={stream.html}
            summary
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
