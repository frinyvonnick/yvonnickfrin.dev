const path = require(`path`)
const { promisify } = require('util')
const fs = require(`fs`)
const fetch = require('node-fetch')
const { fr } = require('date-fns/locale')
const nodeHtmlToImage = require('node-html-to-image')
const { format } = require('date-fns')

const existsAsync = promisify(fs.exists)
const mkdirAsync = promisify(fs.mkdir)

async function makeStreams(createPage, graphql) {
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

async function makeProjectNodes(createNode, createNodeId, createContentDigest) {
  const res = await fetch('https://europe-west1-blog-256318.cloudfunctions.net/pinned-repositories')
  const data = await res.json()
  const pinnedRepositories = data.user.pinnedItems.nodes.map(({ __typename, ...item }) => {
    return {
      ...item,
      stargazers: item.stargazers.totalCount,
      primaryLanguage: item.primaryLanguage.name,
    }
  })

  pinnedRepositories.forEach(repository => {
    const nodeContent = JSON.stringify(repository)

    const nodeMeta = {
      id: createNodeId(`github-project-${repository.name}`),
      repository: {
        path: `/projects/${repository.name}`,
        ...repository,
      },
      internal: {
        type: `GithubProject`,
        mediaType: `text/html`,
        contentDigest: createContentDigest(repository)
      }
    }

    const node = Object.assign({}, repository, nodeMeta)
    createNode(node)
  })
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  
  await makeProjectNodes(createNode, createNodeId, createContentDigest)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  await makeStreams(createPage, graphql)
}

exports.onCreatePage = async ({ page, actions }) => {
  // Made by gatsby theme blog
  if (page.pluginCreatorId === '1b53d695-4767-5102-9bf5-665af3cc6db8') {
    if (page.path === '/') {
      const html = fs.readFileSync(path.join(__dirname, './src/templates/home-card-template.html')).toString('utf8')
      await nodeHtmlToImage({
        html,
        output: `./public/home.jpg`,
        type: 'jpeg',
      })
    } else {
      const html = fs.readFileSync(path.join(__dirname, './src/templates/post-card-template.html')).toString('utf8')
      await nodeHtmlToImage({
        html,
        output: `./public${page.path}.jpg`,
        type: 'jpeg',
        content: {
          title: page.context.title,
          backgroundColor: page.context.backgroundColor || '#baabda'
        }
      })
    }
  }
}

exports.onCreateNode = async ({ node, actions }) => {
  const { createNode, createNodeField, createPage } = actions

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
  } else if (node.internal.type === 'GithubProject') {
    const projectTemplate = path.resolve(`src/templates/project-template.js`)
    createPage({
      path: node.repository.path,
      component: projectTemplate,
      context: {}, // additional data can be passed via context
    })
  }
}
