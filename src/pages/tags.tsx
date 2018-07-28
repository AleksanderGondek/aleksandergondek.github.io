import * as faTag from "@fortawesome/fontawesome-free-solid/faTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "gatsby-link";
import * as _ from "lodash";
import * as React from "react";

import { BlogHelmetComponent } from "../components/BlogHelmet/BlogHelmet";
import { IPageMetadata } from "../contracts/PageMetadata";
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

const TagsPage: React.StatelessComponent<ITagsPageProps> = ( tagsPageProps ) => {
    const data = tagsPageProps.data;
    const pageMetadata: IPageMetadata = {
        additionalKeywords: [],
        description: "Listing of all tags",
        title: "All tags listing",
        url: "/tags",
    };

    return (
        <div className="blogTagsList">
            <BlogHelmetComponent pageMetadata={pageMetadata} siteMetadata={data.site.siteMetadata} />

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
};

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
