import Link from "gatsby-link";
import * as React from "react";

import { BlogPostPreviewComponent, IBlogPostPreviewProps } from "../components/BlogPostPreview/BlogPostPreview";

interface IBlogTagProps {
    pathContext: {
        additionalContext: {
            tag: string,
        }
        first: number,
        group: IBlogPostPreviewProps[],
        index: number,
        last: number,
        pageCount: number,
    };
}

const BlogTagTemplate: React.StatelessComponent<IBlogTagProps> = ({ pathContext }) => {
    const pages = [];
    const tagName = pathContext.additionalContext.tag;
    const tagPageUrl = `/tag/${tagName}/`;
    for (let index = 1; index <= pathContext.pageCount; index++) {
        const isCurrentPage = index === pathContext.index;
        const linkUrl = index !== 1 ? tagPageUrl + `${index}` : tagPageUrl;
        pages.push(<li className={isCurrentPage ? "current" : ""} key={index}><Link to={linkUrl}>{index}</Link></li>);
    }

    return (
        <div>
            <h1>{tagName}</h1>
            <p>Posts with '{tagName}' tag</p>
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
        </div>
    );
};

// This import does not work in other configuration (may it's the default keyword)
export default BlogTagTemplate;
