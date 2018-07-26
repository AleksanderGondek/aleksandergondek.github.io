import Link from "gatsby-link";
import * as _ from "lodash";
import * as React from "react";

import "./BlogPostTagsStyle.scss";

interface IBlogPostTagsProps {
    data: {
        markdownRemark: {
            frontmatter: {
                tags: string[],
            },
        },
    };
}

const BlogPostTagsComponent: React.StatelessComponent<IBlogPostTagsProps> = ({ data }) => (
    <div className="tagsList">
        <strong>Tags:&nbsp;</strong>
        <ul>
            {data.markdownRemark.frontmatter.tags.map((tag, index, allTags) => (
                <li key={index}>
                    <Link to={`/tags/${_.kebabCase(tag)}/`}>
                        {tag}
                    </Link>
                    {allTags.length - 1 !== index ? "," : ""}
                </li>
            ))}
        </ul>
    </div>
);

export { BlogPostTagsComponent, IBlogPostTagsProps };
export const blogPostTagsQuery = graphql`
    fragment blogPostTagsQuery on RootQueryType {
        markdownRemark {
            frontmatter {
                tags
            }
        }
    }
`;
