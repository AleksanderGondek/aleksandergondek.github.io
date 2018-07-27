import Link from "gatsby-link";
import * as React from "react";

import { IPostPreview } from "../../contracts/PostPreview";
import { BlogPostStatsComponent } from "../BlogPostStats/BlogPostStats";

import "./BlogPostPreviewStyle.scss";

const BlogPostPreviewComponent: React.StatelessComponent<IPostPreview> = ({ node }) => {
    return (
        <div className="postPreview">
            <h2><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h2>
            <p>{node.excerpt}</p>
            <BlogPostStatsComponent data={{markdownRemark: node}}/>
        </div>
    );
};

export { BlogPostPreviewComponent };
