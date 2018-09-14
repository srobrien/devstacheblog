const createPaginatedPages = require("gatsby-paginate");
const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");
const _ = require("lodash");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve("src/templates/PostPage.js");
  const tagTemplate = path.resolve("src/templates/Tags.js");

  return graphql(`
    {
      allContentfulBlogPost(
        sort: { order: DESC, fields: [createdAt] }
        limit: 2000
      ) {
        edges {
          node {
            title
            createdAt(formatString: "D MMMM YYYY")
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
      return Promise.reject(result.errors);
    }

    const posts = result.data.allContentfulBlogPost.edges;

    createPaginatedPages({
      edges: posts,
      createPage: createPage,
      pageTemplate: "src/templates/index.js",
      pageLength: 4, // This is optional and defaults to 10 if not used
      pathPrefix: "", // This is optional and defaults to an empty string if not used
      context: {}, // This is optional and defaults to an empty object if not used
    });

    // Create post detail pages
    posts.forEach(({ node }) => {
      createPage({
        path: `/post/${node.slug}`,
        component: blogPostTemplate,
        context: {
          post: node.slug,
        },
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.tags")) {
        tags = tags.concat(edge.node.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      });
    });
  });
};
