import React, { useContext } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { LocationContext } from './layout'

function SEO({ description, lang, meta, keywords, title, date }) {
  const { location } = useContext(LocationContext)

  const { site, blogPost } = useStaticQuery(
    graphql`
      query MdxBlogPost($id: String) {
        blogPost(id: { eq: $id }) {
          id
          date(formatString: "YYYY-MM-DD")
        }
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: location.pathname === '/' ? `https://yvonnickfrin.dev/home.jpg` : `https://yvonnickfrin.dev${location.pathname}.jpg`,
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      {location.pathname !== '/' && (
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "Article",
            "name": ${title},
            "author": {
              "@type": "Person",
              "name": "Yvonnick Frin"
            },
            "datePublished": ${blogPost.date}
          }
        `}</script>
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
