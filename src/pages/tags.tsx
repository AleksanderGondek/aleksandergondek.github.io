import * as faTag from "@fortawesome/fontawesome-free-solid/faTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "gatsby-link";
import * as _ from "lodash";
import * as React from "react";

import "./TagsStyle.scss";

interface ITagsPageGroup {
    fieldValue: string;
    totalCount: number;
}

interface ITagsPageProps {
    data: {
        site: {
            siteMetadata: {
                title: string,
                author: string,
            },
        },
        allMarkdownRemark: {
            group: ITagsPageGroup[],
        };
    };
}

const TagsPage: React.StatelessComponent<ITagsPageProps> = ({ data }) => (
    <div className="blogTagsList">
        <h1>Tags</h1>
        <p>List of all tags present on the blog</p>
        <ul>
            {data.allMarkdownRemark.group.map((tagObject) => (
                <li key={tagObject.fieldValue}>
                    <FontAwesomeIcon icon={faTag} size="sm"/>
                    <Link to={`/tag/${_.kebabCase(tagObject.fieldValue)}/`}>
                        {tagObject.fieldValue}
                    </Link>
                    <div className="description">
                        {tagObject.totalCount} post{tagObject.totalCount > 1 ? "s" : null} under this tag
                    </div>
                </li>
            ))}
        </ul>
    </div>
);
// This import does not work in other configuration (may it's the default keyword)
export default TagsPage;
export const tagsPageQuery = graphql`
    query tagsPageQuery {
        site {
            siteMetadata {
                title
                author
            }
        }
        allMarkdownRemark(
            limit: 3000
        ) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;
