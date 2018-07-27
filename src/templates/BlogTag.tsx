import Link from "gatsby-link";
import * as React from "react";
import Helmet from "react-helmet";

import { BlogPostPreviewComponent } from "../components/BlogPostPreview/BlogPostPreview";
import { IPagination } from "../contracts/Pagination";
import { ISiteMetadata } from "../contracts/SiteMetadata";

const BlogTagTemplate: React.StatelessComponent<IPagination> = ({ pathContext }) => {
    const siteMetadata: ISiteMetadata = pathContext.additionalContext.siteMetadata;
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
            <Helmet
                title={siteMetadata.title + ` - '${tagName}' tag posts`}
                meta={[
                    { name: "author", content: siteMetadata.author.fullName},
                    { name: "description", content: `Posts with '${tagName}' tag` },
                    { name: "keywords", content: "sample, something" },
                    { property: "og:site_name", content: siteMetadata.title},
                    { property: "og:title", content: siteMetadata.title + ` - '${tagName}' tag posts`},
                    { property: "og:description", content: `Posts with '${tagName}' tag`},
                    { property: "og:type", content: "website"},
                    { property: "og:image", content: ""},
                    { property: "og:url", content: ""},
                ]}
            />
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
