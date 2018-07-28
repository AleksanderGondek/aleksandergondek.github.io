import * as React from "react";
import Helmet from "react-helmet";

import { BlogHelmetComponent } from "../components/BlogHelmet/BlogHelmet";
import { BlogPostShareComponent } from "../components/BlogPostShare/BlogPostShare";
import { BlogPostStatsComponent } from "../components/BlogPostStats/BlogPostStats";
import { IPageMetadata } from "../contracts/PageMetadata";
import { IPostWithSiteMetaProps } from "../contracts/Post";

import "./BlogPostStyle.scss";

const BlogPostTemplate: React.StatelessComponent<IPostWithSiteMetaProps> = ({ data }) => {
    const pageMetadata: IPageMetadata = {
        additionalKeywords: data.markdownRemark.frontmatter.tags,
        description: data.markdownRemark.excerpt,
        title: data.markdownRemark.frontmatter.title,
        url: data.markdownRemark.fields.slug,
    };

    return (
        <div>
            <BlogHelmetComponent pageMetadata={pageMetadata} siteMetadata={data.site.siteMetadata} />

            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <BlogPostStatsComponent data={data} />

            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

            <BlogPostShareComponent data={data} />
        </div>
    );
};

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
