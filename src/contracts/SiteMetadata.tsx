interface ISiteMetadata {
    author: {
        fullName: string,
        githubProfile: string,
        linkedInProfie: string,
    };
    baseUrl: string;
    keywords: string[];
    shareLinksPrefix: {
        linkedin: string,
        reddit: string,
        twitter: string,
        ycombinator: string,
    };
    title: string;
}

interface ISiteMetadataProps {
    data: {
        site: {
            siteMetadata: ISiteMetadata,
        },
    };
}

export const SiteMetadataQuery = graphql`
    fragment SiteMetadataQuery on RootQueryType {
        site {
            siteMetadata {
                author {
                    fullName,
                    githubProfile,
                    linkedInProfie
                }
                baseUrl
                keywords
                shareLinksPrefix {
                    linkedin
                    reddit
                    twitter
                    ycombinator
                }
                title
            }
        }
    }
`;

export { ISiteMetadata, ISiteMetadataProps };
