import * as faCalendar from "@fortawesome/fontawesome-free-solid/faCalendar";
import * as faClock from "@fortawesome/fontawesome-free-solid/faClock";
import * as faTags from "@fortawesome/fontawesome-free-solid/faTags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "gatsby-link";
import * as _ from "lodash";
import * as React from "react";

import "./BlogPostStatsStyle.scss";

class BlogPostStatsComponent extends React.PureComponent<IBlogPostsStatsProps, {}> {
    render() {
        const tagsPresent = this.props.data.markdownRemark.frontmatter.tags.length !== 0;
        return (
            <div className="blogPostsStats">
                <div className="column">
                    <FontAwesomeIcon icon={faCalendar} />&nbsp;&nbsp;
                    Posted on {this.props.data.markdownRemark.frontmatter.date}
                </div>
                <div className="column">
                    |
                </div>
                <div className="column">
                    <FontAwesomeIcon icon={faClock} />&nbsp;&nbsp;
                    {this.props.data.markdownRemark.timeToRead} minutes
                     ({this.props.data.markdownRemark.wordCount.words} words)
                </div>
                {
                    tagsPresent ? (
                        <div className="column">
                            |
                        </div>
                    ) : (
                        null
                    )
                }
                {
                    tagsPresent ? (
                        <div className="column">
                            <FontAwesomeIcon icon={faTags} />&nbsp;&nbsp;
                            {this.props.data.markdownRemark.frontmatter.tags.map((tag, index, allTags) => (
                                <label key={index}>
                                    <Link to={`/tag/${_.kebabCase(tag)}/`}>
                                        {tag}
                                    </Link>
                                    {allTags.length - 1 !== index ? "," : ""}&nbsp;
                                </label>
                            ))}
                        </div>
                    ) : (
                        null
                    )
                }
            </div>
        );
    }
}

interface IBlogPostStats {
    markdownRemark: {
        frontmatter: {
            date: string,
            tags: string[],
        }
        timeToRead: number,
        wordCount: {
            words: number,
        },
    };
}

interface IBlogPostsStatsProps {
    data: IBlogPostStats;
}

export { BlogPostStatsComponent, IBlogPostStats, IBlogPostsStatsProps };
