import { IMarkdownRemark } from "./MarkdownRemark";
import { ISiteMetadata } from "./SiteMetadata";

interface IPostProps {
    data: {
        markdownRemark: IMarkdownRemark,
    };
}

interface IPostWithSiteMetaProps extends IPostProps {
    data: {
        site: {
            siteMetadata: ISiteMetadata,
        },
        markdownRemark: IMarkdownRemark,
    };
}

export { IPostProps, IPostWithSiteMetaProps };
