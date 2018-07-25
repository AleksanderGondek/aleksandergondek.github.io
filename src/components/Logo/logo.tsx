import Link from "gatsby-link";
import * as React from "react";

import { ISiteMetadataProps } from "../../graphQl/SiteMetadata";

import "./LogoStyle.scss";

// tslint:disable-next-line:no-var-requires
const logo = require("./logo.png");

class LogoComponent extends React.PureComponent<ISiteMetadataProps, {}> {
    render() {
        return (
            <div className={"logoComponent"}>
                <img src={logo} alt="Logo" className={"image"} />
                <h2>{this.props.data.site.siteMetadata.title}</h2>
            </div>
        );
    }
}

export { LogoComponent };
