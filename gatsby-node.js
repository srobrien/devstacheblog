const createPaginatedPages = require('gatsby-paginate')
const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const _ = require('lodash')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve('src/templates/PostPage.js')
  const tagTemplate = path.resolve('src/templates/Tags.js')

  return graphql(`
    {
      allContentfulBlogPost(
        sort: { order: DESC, fields: [date] }
        limit: 2000
      ) {
        edges {
          node {
            title
            date(formatString: "DD MMMM YYYY")
            body {
              id
              childMarkdownRemark {
                id
                excerpt(pruneLength: 200)
              }
            }
            slug
            tags
            thumbnail {
              resolutions {
                src
              }
            }

            images {
              id
              resize(width: 400) {
                src
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allContentfulBlogPost.edges

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, 'node.tags')) {
        tags = tags.concat(edge.node.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: 'src/templates/index.js',
      pageLength: 10,
      pathPrefix: '',
      context: { tags },
    })

    // Create post detail pages
    posts.forEach(({ node }) => {
      createPage({
        path: `/post/${node.slug}`,
        component: blogPostTemplate,
        context: {
          post: node.slug,
          tags,
        },
      })
    })

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })
  })
}
