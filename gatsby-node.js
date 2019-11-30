const path = require(`path`)
const { promisify } = require('util')
const fs = require(`fs`)
const handlebars = require('handlebars')
const puppeteer = require('puppeteer')
const request = require('request').defaults({ encoding: null });
const { fr } = require('date-fns/locale')
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
  }

  if (node.internal.type === 'MarkdownRemark') {
    const { frontmatter } = node 

    const source = fs.readFileSync(path.join(__dirname, './src/templates/stream-card-template.html')).toString('utf8')
    const template = handlebars.compile(source)
    const browser = await puppeteer.launch({ headless: true, args: ['--lang=fr-FR,fr'] })
    const page = await browser.newPage()

    const [hours, minutes] = frontmatter.startHour.split(':')
    const pageContent = {
      title: frontmatter.title,
      streamer: 'https://avatars.io/twitter/yvonnickfrin',
      date: format(new Date(frontmatter.date), 'eeee dd MMMM yyyy', { locale: fr }),
      hour: `${hours}h${minutes}`,
    }

    if (frontmatter.guest) {
      pageContent.guest = `https://avatars.io/twitter/${frontmatter.guest}`
    }

    await page.setContent(template(pageContent))
    const elements = await page.$$('body')
    const element = elements[0]
    await element.screenshot({ path: `./public${frontmatter.path}.jpg` })

    await browser.close()
  }
}
