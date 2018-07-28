import { ISiteMetadata } from "./SiteMetadata";

interface IPageMetadata {
    title: string;
    description: string;
    additionalKeywords?: string[];
    url: string;
}

interface IBlogHelmetProps {
    pageMetadata: IPageMetadata;
    siteMetadata: ISiteMetadata;
}

export { IBlogHelmetProps, IPageMetadata };
