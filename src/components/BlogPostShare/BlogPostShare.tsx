import * as faLinkedin from "@fortawesome/fontawesome-free-brands/faLinkedin";
import * as faRedditSquare from "@fortawesome/fontawesome-free-brands/faRedditSquare";
import * as faTwitterSquare from "@fortawesome/fontawesome-free-brands/faTwitterSquare";
import * as faYCombinator from "@fortawesome/fontawesome-free-brands/faYCombinator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

import { IPostWithSiteMetaProps } from "../../contracts/Post";

import "./BlogPostShareStyle.scss";

const BlogPostShareComponent: React.StatelessComponent<IPostWithSiteMetaProps> = ({ data }) => {
    const blogPostFullUrl = data.site.siteMetadata.baseUrl + data.markdownRemark.fields.slug;
    const blogPostTitle = data.markdownRemark.frontmatter.title;

    const twitterShare = data.site.siteMetadata.shareLinksPrefix.twitter + blogPostFullUrl + "&text=" + blogPostTitle;
    const redditShare = data.site.siteMetadata.shareLinksPrefix.reddit + blogPostFullUrl + "&title=" + blogPostTitle;
    // tslint:disable-next-line:max-line-length
    const ycombinatorShare = data.site.siteMetadata.shareLinksPrefix.ycombinator + blogPostFullUrl + "&t=" + blogPostTitle;
    // tslint:disable-next-line:max-line-length
    const linkedinShare = data.site.siteMetadata.shareLinksPrefix.linkedin + blogPostFullUrl + "&title=" + blogPostTitle;

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

export { BlogPostShareComponent };
