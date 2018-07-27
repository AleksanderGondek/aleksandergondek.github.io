import { IPostPreview } from "./PostPreview";
import { ISiteMetadata } from "./SiteMetadata";

interface IPagination {
    pathContext: {
        additionalContext: {
            siteMetadata: ISiteMetadata,
            tag?: string,
        }
        first: number,
        group: IPostPreview[],
        index: number,
        last: number,
        pageCount: number,
    };
}

export { IPagination };
