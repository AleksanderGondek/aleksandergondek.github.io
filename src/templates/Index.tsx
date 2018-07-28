import * as React from "react";

import { BlogHelmetComponent } from "../components/BlogHelmet/BlogHelmet";
import { BlogPostPreviewComponent } from "../components/BlogPostPreview/BlogPostPreview";
import { PagingComponent } from "../components/Paging/Paging";
import { IPageMetadata } from "../contracts/PageMetadata";
import { IPagination } from "../contracts/Pagination";
import { ISiteMetadata } from "../contracts/SiteMetadata";

import "./IndexStyle.scss";

const BlogIndexTemplate: React.StatelessComponent<IPagination> = ( paginationProps ) => {
    const pathContext = paginationProps.pathContext;
    const siteMetadata: ISiteMetadata = pathContext.additionalContext.siteMetadata;
    const pageMetadata: IPageMetadata = {
        additionalKeywords: [],
        description: "List of all posts on the blog",
        title: "Home",
        url: pathContext.index !== 1 ? `/${pathContext.index}` : "/",
    };

    return (
        <div>
            <BlogHelmetComponent pageMetadata={pageMetadata} siteMetadata={siteMetadata} />
            {
                pathContext.group.map((post, index) => {
                    return (<BlogPostPreviewComponent node={post.node} key={index} />);
                })
            }
            <PagingComponent pages={paginationProps}/>
        </div>
    );
};

export default BlogIndexTemplate;
