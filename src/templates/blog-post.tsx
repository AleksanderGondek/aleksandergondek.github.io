import * as React from "react";
import Helmet from "react-helmet";

interface IBlogPostTemplateProps {
    data: {
        markdownRemark: {
            html: string
            excerpt: string
            frontmatter: {
                date: string,
                path: string,
                title: string,
            },
        },
    };
}

const BlogPostTemplate: React.StatelessComponent<IBlogPostTemplateProps> = ( blogData ) => (
    <div>
        <h1>{blogData.data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blogData.data.markdownRemark.html }} />
    </div>
);

export default BlogPostTemplate;
export const blogPostByPathQuery = graphql`
  query blogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
