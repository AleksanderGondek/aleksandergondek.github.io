import * as faCalendar from "@fortawesome/fontawesome-free-solid/faCalendar";
import * as faClock from "@fortawesome/fontawesome-free-solid/faClock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

import "./BlogPostStatsStyle.scss";

class BlogPostStatsComponent extends React.PureComponent<IBlogPostsStatsProps, {}> {
    render() {
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
            </div>
        );
    }
}

interface IBlogPostStats {
    markdownRemark: {
        frontmatter: {
            date: string,
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

export const blogPostsStatsQuery = graphql`
    fragment blogPostsStatsQuery on RootQueryType {
        markdownRemark {
            frontmatter {
                date(formatString: "DD MMMM YYYY, HH:MM z")
            }
            timeToRead
            wordCount {
                words
            }
        }
    }
`;

export { BlogPostStatsComponent, IBlogPostStats, IBlogPostsStatsProps };
