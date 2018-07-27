import Link from "gatsby-link";
import * as React from "react";
import Helmet from "react-helmet";

import { BlogPostPreviewComponent, IBlogPostPreviewProps } from "../components/BlogPostPreview/BlogPostPreview";

import "./IndexStyle.scss";

interface IBlogIndexProps {
    pathContext: {
        additionalContext: {
            siteMetadata: {
                title: string,
                author: string,
                urlPrefix: string,
            },
        }
        first: number,
        group: IBlogPostPreviewProps[],
        index: number,
        last: number,
        pageCount: number,
    };
}

const BlogIndexTemplate: React.StatelessComponent<IBlogIndexProps> = ({ pathContext }) => {
    const siteMetadata = pathContext.additionalContext.siteMetadata;
    const pages = [];
    for (let index = 1; index <= pathContext.pageCount; index++) {
        const isCurrentPage = index === pathContext.index;
        const linkUrl = index !== 1 ? `/${index}` : "/";
        pages.push(<li className={isCurrentPage ? "current" : ""} key={index}><Link to={linkUrl}>{index}</Link></li>);
    }

    return (
        <div>
            <Helmet
                title={siteMetadata.title + " - " + "Home"}
                meta={[
                    { name: "author", content: siteMetadata.author},
                    { name: "description", content: "List of all posts on blog" },
                    { name: "keywords", content: "sample, something" },
                    { property: "og:site_name", content: siteMetadata.title},
                    { property: "og:title", content: siteMetadata.title + " - " + "Home"},
                    { property: "og:description", content: "List of all posts on blog"},
                    { property: "og:type", content: "website"},
                    { property: "og:image", content: ""},
                    { property: "og:url", content: ""},
                ]}
            />
            {
                pathContext.group.map((post, index) => {
                    return (<BlogPostPreviewComponent node={post.node} key={index} />);
                })
            }
            {
                pages.length > 1 ? (
                    <ol className="blogPostsPaging">{pages}</ol>
                ) : (
                    null
                )
            }
        </div>
    );
};

export default BlogIndexTemplate;
