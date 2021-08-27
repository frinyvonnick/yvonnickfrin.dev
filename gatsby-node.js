const path = require("path")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query AllBlogPosts {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
            }
            html
            parent {
              ... on File {
                id
                name
              }
            }
          }
        }
      }
    }
  `)

  const component = path.join(__dirname, `src/templates/blog.js`)

  result.data.allMarkdownRemark.edges.forEach(edge => {
    const {
      frontmatter: { title, date },
      parent: { name },
      html,
    } = edge.node
    createPage({
      path: `/${name}`,
      component,
      context: {
        title,
        date,
        html,
      },
    })
  })
}
