import * as React from "react";
import Helmet from "react-helmet";

import {BlogPostStatsComponent, IBlogPostsStatsProps} from "../components/BlogPostStats/BlogPostStats";
import "./BlogPostStyle.scss";

interface IBlogPostTemplateProps extends IBlogPostsStatsProps {
    data: {
        site: {
            siteMetadata: {
                title: string,
                author: string,
            },
        },
        markdownRemark: {
            html: string
            excerpt: string
            frontmatter: {
                date: string,
                title: string,
                tags: string[],
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

const BlogPostTemplate: React.StatelessComponent<IBlogPostTemplateProps> = ({ data }) => (
    <div>
        <Helmet
            title={data.site.siteMetadata.title + " - " + data.markdownRemark.frontmatter.title}
            meta={[
                { name: "author", content: data.site.siteMetadata.author},
                { name: "description", content: data.markdownRemark.excerpt },
                { name: "keywords", content: "sample, something" },
                { property: "og:site_name", content: data.site.siteMetadata.title},
                // tslint:disable-next-line:max-line-length
                { property: "og:title", content: data.site.siteMetadata.title + " - " + data.markdownRemark.frontmatter.title},
                { property: "og:description", content: data.markdownRemark.excerpt},
                { property: "og:type", content: "website"},
                { property: "og:image", content: ""},
                { property: "og:url", content: ""},
            ]}
        />
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <BlogPostStatsComponent data={data} />
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
);

// This import does not work in other configuration (may it's the default keyword)
export default BlogPostTemplate;
export const blogPostByPathQuery = graphql`
  query blogPostByPath($path: String!) {
    site {
        siteMetadata {
            title
            author
        }
    }
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
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
      wordCount {
          words
      }
    }
  }
`;
