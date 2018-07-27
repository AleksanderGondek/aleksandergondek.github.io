import * as React from "react";
import Helmet from "react-helmet";

import {BlogPostShareComponent } from "../components/BlogPostShare/BlogPostShare";
import {BlogPostStatsComponent } from "../components/BlogPostStats/BlogPostStats";
import { IPostWithSiteMetaProps } from "../contracts/Post";

import "./BlogPostStyle.scss";

const BlogPostTemplate: React.StatelessComponent<IPostWithSiteMetaProps> = ({ data }) => (
    <div>
        <Helmet
            title={data.site.siteMetadata.title + " - " + data.markdownRemark.frontmatter.title}
            meta={[
                { name: "author", content: data.site.siteMetadata.author.fullName},
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

        <BlogPostShareComponent data={data} />
    </div>
);

// This import does not work in other configuration (may it's the default keyword)
export default BlogPostTemplate;
export const blogPostByPathQuery = graphql`
    query blogPostByPath($path: String!) {
        ...SiteMetadataQuery
        markdownRemark(fields: { slug: { eq: $path } }) {
            ...MarkdownRemarkQuery
        }
    }
`;
