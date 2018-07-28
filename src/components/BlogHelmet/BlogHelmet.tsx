import { IBlogHelmetProps } from "../../contracts/PageMetadata";

import * as _ from "lodash";
import * as React from "react";
import Helmet from "react-helmet";

// tslint:disable-next-line:no-var-requires
const favicon = require("../../favicon.png");

const BlogHelmetComponent: React.StatelessComponent<IBlogHelmetProps> = ({ pageMetadata, siteMetadata }) => {
    const allKeywords = _.isNil(pageMetadata.additionalKeywords) ?
        siteMetadata.keywords : siteMetadata.keywords.concat(pageMetadata.additionalKeywords);

    const finalPageTitle = `${siteMetadata.title} - ${pageMetadata.title}`;
    const finalPageKeywords = allKeywords.join(", ");
    const finalPageUrl = `${siteMetadata.baseUrl}${pageMetadata.url}`;

    return (
        <Helmet
            title={finalPageTitle}
            meta={[
                { name: "author", content: siteMetadata.author.fullName },
                { name: "description", content: pageMetadata.description },
                { name: "keywords", content: finalPageKeywords },
                { property: "og:site_name", content: siteMetadata.title },
                { property: "og:title", content: finalPageTitle },
                { property: "og:description", content: pageMetadata.description },
                { property: "og:type", content: "website" },
                { property: "og:image", content: favicon },
                { property: "og:url", content: finalPageUrl },
            ]}
        />
    );
};

export { BlogHelmetComponent };
