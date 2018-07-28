import * as React from "react";

import { BlogHelmetComponent } from "../components/BlogHelmet/BlogHelmet";
import { BlogPostPreviewComponent } from "../components/BlogPostPreview/BlogPostPreview";
import { PagingComponent } from "../components/Paging/Paging";
import { IPageMetadata } from "../contracts/PageMetadata";
import { IPagination } from "../contracts/Pagination";
import { ISiteMetadata } from "../contracts/SiteMetadata";

const BlogTagTemplate: React.StatelessComponent<IPagination> = ( paginationProps ) => {
    const pathContext = paginationProps.pathContext;
    const siteMetadata: ISiteMetadata = pathContext.additionalContext.siteMetadata;
    const tagName = pathContext.additionalContext.tag;
    const pageMetadata: IPageMetadata = {
        additionalKeywords: [],
        description: `'${tagName}' tag posts`,
        title: `Posts with '${tagName}' tag`,
        url: pathContext.index !== 1 ? `/${tagName}/${pathContext.index}` : `/${tagName}`,
    };

    return (
        <div>
            <BlogHelmetComponent pageMetadata={pageMetadata} siteMetadata={siteMetadata} />

            <h1>{tagName}</h1>
            <p>Posts with '{tagName}' tag</p>
            {
                pathContext.group.map((post, index) => {
                    return (<BlogPostPreviewComponent node={post.node} key={index} />);
                })
            }
            <PagingComponent pages={paginationProps} urlPrefix={tagName}/>
        </div>
    );
};

export default BlogTagTemplate;
