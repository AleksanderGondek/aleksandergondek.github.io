interface ISiteMetadata {
    site: {
        siteMetadata: {
            title: string,
            author: string;
            githubUrl: string,
            linkedInUrl: string,
        },
    };
}

interface ISiteMetadataProps {
    data: ISiteMetadata;
}

export { ISiteMetadata, ISiteMetadataProps };
export const siteMetadataQuery = graphql`
    fragment siteMetadataQuery on RootQueryType {
        site {
            siteMetadata {
                title
                author
                githubUrl,
                linkedInUrl,
            }
        }
    }
`;
