import * as faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin";
import * as faRedditSquare from "@fortawesome/fontawesome-free-brands/faRedditSquare";
import * as faTwitterSquare from "@fortawesome/fontawesome-free-brands/faTwitterSquare";
import * as faYCombinator from "@fortawesome/fontawesome-free-brands/faYCombinator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

import "./BlogPostShareStyle.scss";

interface IBlogPostShareProps {
    data: {
        site: {
            siteMetadata: {
                urlPrefix: string,
                shareUrls: {
                    twitter: string,
                    reddit: string,
                    ycombinator: string,
                    linkedin: string,
                },
            },
        },
        markdownRemark: {
            frontmatter: {
                title: string,
            }
            fields: {
                slug: string,
            },
        },
    };
}

const BlogPostShareComponent: React.StatelessComponent<IBlogPostShareProps> = ({ data }) => {
    const blogPostFullUrl = data.site.siteMetadata.urlPrefix + data.markdownRemark.fields.slug;
    const blogPostTitle = data.markdownRemark.frontmatter.title;

    const twitterShare = data.site.siteMetadata.shareUrls.twitter + blogPostFullUrl + "&text=" + blogPostTitle;
    const redditShare = data.site.siteMetadata.shareUrls.reddit + blogPostFullUrl + "&title=" + blogPostTitle;
    const ycombinatorShare = data.site.siteMetadata.shareUrls.ycombinator + blogPostFullUrl + "&t=" + blogPostTitle;
    const linkedinShare = data.site.siteMetadata.shareUrls.linkedin + blogPostFullUrl + "&title=" + blogPostTitle;

    return (
        <div className="shareList">
            <ol>
                <li><strong>Share:</strong></li>
                <li><a href={twitterShare}><FontAwesomeIcon icon={faTwitterSquare} size="lg" /></a></li>
                <li><a href={redditShare}><FontAwesomeIcon icon={faRedditSquare} size="lg"/></a></li>
                <li><a href={ycombinatorShare}><FontAwesomeIcon icon={faYCombinator} size="lg"/></a></li>
                <li><a href={linkedinShare}><FontAwesomeIcon icon={faLinkedin} size="lg"/></a></li>
            </ol>
        </div>
    );
};

export { BlogPostShareComponent, IBlogPostShareProps };
export const blogPostShareQuery = graphql`
    fragment blogPostShareQuery on RootQueryType {
        site {
            siteMetadata {
                urlPrefix
                shareUrls {
                    twitter
                    reddit
                    ycombinator
                    linkedin
                }
            }
        }
        markdownRemark {
            frontmatter {
                title
            }
            fields {
                slug
            }
        }
    }
`;
