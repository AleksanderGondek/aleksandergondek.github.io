/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// tslint:disable-next-line:no-var-requires
const { createFilePath } = require("gatsby-source-filesystem");

// tslint:disable-next-line:no-var-requires
const path = require("path");
const allMarkDownQuery = `{
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
    ) {
        edges {
            node {
                frontmatter {
                    date
                    title
                }
                fields {
                    slug
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

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: blogPostTemplate,
                context: {  // additional data can be passed via context
                    slug: node.fields.slug,
                }
            });
        });
    });
};
