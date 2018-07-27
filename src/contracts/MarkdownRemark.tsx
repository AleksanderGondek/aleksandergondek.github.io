interface IMarkdownRemark {
    html: string;
    excerpt: string;
    fields: {
        slug: string,
    };
    frontmatter: {
        date: string,
        title: string,
        tags: string[],
    };
    timeToRead: number;
    stats: {
        words: number,
    };
}

export const MarkdownRemarkQuery = graphql`
    fragment MarkdownRemarkQuery on MarkdownRemark {
        html
        excerpt
        fields {
            slug
        }
        frontmatter {
            date(formatString: "DD MMMM YYYY, HH:MM z")
            title
            tags
        }
        timeToRead
        stats: wordCount {
            words
        }
    }
`;

export { IMarkdownRemark };
