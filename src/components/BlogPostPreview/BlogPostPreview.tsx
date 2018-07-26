import Link from "gatsby-link";
import * as _ from "lodash";
import * as React from "react";

import {BlogPostStatsComponent, IBlogPostStats} from "../BlogPostStats/BlogPostStats";

import "./BlogPostPreviewStyle.scss";

interface IBlogPostPreviewProps {
    node: {
        excerpt: string,
        fields: {
            slug: string,
        },
        frontmatter: {
            date: string,
            title: string,
            tags: string[],
        },
        timeToRead: number,
        proxyWordCount: {
            words: number,
        }
        wordCount: {
            words: number,
        },
    };
}

const BlogPostPreviewComponent: React.StatelessComponent<IBlogPostPreviewProps> = ({ node }) => {
    if (_.isUndefined(node.wordCount) || _.isNull(node.wordCount)) {
        node.wordCount = {
            words: node.proxyWordCount.words,
        };
    }

    const blogPostsStatsProps: IBlogPostStats = {
        markdownRemark: {
            frontmatter: {
                date: node.frontmatter.date,
                tags: node.frontmatter.tags,
            },
            timeToRead: node.timeToRead,
            wordCount: {
                words: node.wordCount.words,
            },
        },
    };

    return (
        <div className="postPreview">
            <h2><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h2>
            <p>{node.excerpt}</p>
            <BlogPostStatsComponent data={blogPostsStatsProps}/>
        </div>
    );
};

export { BlogPostPreviewComponent, IBlogPostPreviewProps };
