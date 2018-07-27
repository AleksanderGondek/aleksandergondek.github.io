import * as faTag from "@fortawesome/fontawesome-free-solid/faTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "gatsby-link";
import * as _ from "lodash";
import * as React from "react";
import Helmet from "react-helmet";

import { ISiteMetadata } from "../contracts/SiteMetadata";

import "./TagsStyle.scss";

interface ITagsPageGroup {
    fieldValue: string;
    totalCount: number;
}

interface ITagsPageProps {
    data: {
        site: {
            siteMetadata: ISiteMetadata,
        },
        allMarkdownRemark: {
            group: ITagsPageGroup[],
        };
    };
}

const TagsPage: React.StatelessComponent<ITagsPageProps> = ({ data }) => (
    <div className="blogTagsList">
        <Helmet
            title={data.site.siteMetadata.title + " - All tags listing"}
            meta={[
                { name: "author", content: data.site.siteMetadata.author.fullName},
                { name: "description", content: "Listing of all tags" },
                { name: "keywords", content: "sample, something" },
                { property: "og:site_name", content: data.site.siteMetadata.title},
                // tslint:disable-next-line:max-line-length
                { property: "og:title", content: data.site.siteMetadata.title + " - All tags listing"},
                { property: "og:description", content: "Listing of all tags"},
                { property: "og:type", content: "website"},
                { property: "og:image", content: ""},
                { property: "og:url", content: ""},
            ]}
        />
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
        ...SiteMetadataQuery
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
