import Link from "gatsby-link";
import * as React from "react";

import { BlogPostPreviewComponent, IBlogPostPreviewProps } from "../components/BlogPostPreview/BlogPostPreview";

import "./IndexStyle.scss";

interface IBlogIndexProps {
    pathContext: {
        first: number,
        group: IBlogPostPreviewProps[],
        index: number,
        last: number,
        pageCount: number,
    };
}

const BlogIndexTemplate: React.StatelessComponent<IBlogIndexProps> = ({ pathContext }) => {
    const pages = [];
    for (let index = 1; index <= pathContext.pageCount; index++) {
        const isCurrentPage = index === pathContext.index;
        const linkUrl = index !== 1 ? `/${index}` : "/";
        pages.push(<li className={isCurrentPage ? "current" : ""} key={index}><Link to={linkUrl}>{index}</Link></li>);
    }

    return (
        <div>
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
