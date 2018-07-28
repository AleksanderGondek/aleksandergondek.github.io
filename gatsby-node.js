/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */



const { createFilePath } = require("gatsby-source-filesystem");

const createPaginatedPages = require("gatsby-paginate");
const _ = require("lodash");
const path = require("path");

const allMarkDownQuery = `{
    site {
        siteMetadata {
            author {
                fullName,
                githubProfile,
                linkedInProfie
            }
            baseUrl
            keywords
            shareLinksPrefix {
                linkedin
                reddit
                twitter
                ycombinator
            }
            title
        }
    }
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
    ) {
        edges {
            node {
                excerpt
                frontmatter {
                    date(formatString: "DD MMMM YYYY, HH:MM z")
                    title
                    tags
                }
                fields {
                    slug
                }
                timeToRead
                stats: wordCount {
                    words
                }
            }
        }
    }
}`;


exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators
    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: "pages" })
        createNodeField({
            node,
            name: "slug",
            value: slug,
        })
    }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;
    const blogPostTemplate = path.resolve(`src/templates/BlogPost.tsx`);

    return graphql(allMarkDownQuery).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        createPaginatedPages({
            edges: result.data.allMarkdownRemark.edges,
            createPage: createPage,
            pageTemplate: `src/templates/Index.tsx`,
            pageLength: 10,
            pathPrefix: "",
            context: {
                "siteMetadata": result.data.site.siteMetadata,
            }
        });

        let tags = [];
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            tags = tags.concat(node.frontmatter.tags);
            createPage({
                path: node.fields.slug,
                component: blogPostTemplate,
                context: {  // additional data can be passed via context
                    slug: node.fields.slug,
                },
            });
        });

        _.uniq(tags).forEach(tag => {
            const edges = _.filter(result.data.allMarkdownRemark.edges, ({ node }) => {
                return _.includes(node.frontmatter.tags, tag);
            });

            createPaginatedPages({
                edges: edges,
                createPage: createPage,
                pageTemplate: `src/templates/BlogTag.tsx`,
                pageLength: 10,
                pathPrefix: `tag/${_.kebabCase(tag)}`,
                context: {
                    "siteMetadata": result.data.site.siteMetadata,
                    "tag": tag,
                },
            });
        });
    });
};
