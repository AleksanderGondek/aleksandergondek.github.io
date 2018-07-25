import * as React from "react";

interface IBlogTagEdge {
    node: {
        exerpt: string,
        frontmatter: {
            title: string,
        },
        fields: {
            slug: string,
        },
        timeToRead: number
        wordCount: {
            words: number,
        },
    };
}

interface IBlogTagProps {
    data: {
        allMarkdownRemark: {
            totalCount: number,
            edges: IBlogTagEdge[],
        },
    };
    pathContext: {
        tag: string,
    };
}

const BlogTagTemplate: React.StatelessComponent<IBlogTagProps> = ({ data, pathContext }) => (
    <div>
        <h1>{pathContext.tag}</h1>
        <div>{data.allMarkdownRemark.totalCount} blog entries matching the tag</div>
    </div>
);

// This import does not work in other configuration (may it's the default keyword)
export default BlogTagTemplate;
export const blogTagQuery = graphql`
    query blogTagQuery($tag: String) {
        allMarkdownRemark(
            limit: 3000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    excerpt
                    frontmatter {
                        title
                    }
                    fields {
                         slug
                    }
                    timeToRead
                    wordCount {
                        words
                    }
                }
            }
        }
    }
`;
