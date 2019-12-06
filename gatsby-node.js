const path = require(`path`)
const { promisify } = require('util')
const fs = require(`fs`)
const request = require('request').defaults({ encoding: null });
const { fr } = require('date-fns/locale')
const nodeHtmlToImage = require('node-html-to-image')
const { format } = require('date-fns')

const existsAsync = promisify(fs.exists)
const mkdirAsync = promisify(fs.mkdir)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const streamTemplate = path.resolve(`src/templates/stream-template.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: streamTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

exports.onCreateNode = async ({ node, actions }) => {
  const { createNode, createNodeField } = actions

  const alreadyExists = await existsAsync(path.join(__dirname, '/public/streams'))
  if (!alreadyExists) {
    await mkdirAsync(path.join(__dirname, '/public/streams'))
      .catch(() => {
        // ignore errors
      })
  }

  if (node.internal.type === 'MarkdownRemark') {
    const { frontmatter } = node 

    const [hours, minutes] = frontmatter.startHour.split(':')
    const content = {
      title: frontmatter.title,
      streamer: 'https://avatars.io/twitter/yvonnickfrin',
      date: format(new Date(frontmatter.date), 'eeee dd MMMM yyyy', { locale: fr }),
      hour: `${hours}h${minutes}`,
    }

    if (frontmatter.guest) {
      content.guest = `https://avatars.io/twitter/${frontmatter.guest}`
    }

    const html = fs.readFileSync(path.join(__dirname, './src/templates/stream-card-template.html')).toString('utf8')
    await nodeHtmlToImage({
      html,
      output: `./public${frontmatter.path}.jpg`,
      content,
      type: 'jpeg',
      puppeteerArgs: { args: ['--lang=fr-FR,fr'] }
    })
  }
}
