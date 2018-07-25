import * as React from "react";
import Helmet from "react-helmet";

import {BlogPostStatsComponent, IBlogPostsStatsProps} from "../components/BlogPostStats/BlogPostStats";
import "./BlogPostStyle.scss";

interface IBlogPostTemplateProps extends IBlogPostsStatsProps {
    data: {
        markdownRemark: {
            html: string
            excerpt: string
            frontmatter: {
                date: string,
                title: string,
            },
            fields: {
                slug: string,
            },
            timeToRead: number,
            wordCount: {
                words: number,
            },
        },
    };
}

const blogPostByPathQuery = graphql`
  query blogPostByPath($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY, HH:MM z")
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
`;

const BlogPostTemplate: React.StatelessComponent<IBlogPostTemplateProps> = ({ data }) => (
    <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <BlogPostStatsComponent data={data} />
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
);

export { IBlogPostTemplateProps, BlogPostTemplate, blogPostByPathQuery };
