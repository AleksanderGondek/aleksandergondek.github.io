import Link from "gatsby-link";
import * as _ from "lodash";
import * as React from "react";

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
    <div>
        <h1>Tags</h1>
        <ul>
            {data.allMarkdownRemark.group.map((tagObject) => (
                <li key={tagObject.fieldValue}>
                    <Link to={`/tags/${_.kebabCase(tagObject.fieldValue)}/`}>
                        {tagObject.fieldValue} ({tagObject.totalCount})
                    </Link>
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
