import Link from "gatsby-link";
import * as React from "react";

import "./logo.scss";

// tslint:disable-next-line:no-var-requires
const logo = require("./logo.png");

class LogoComponent extends React.PureComponent<{}, {}> {
    render() {
        return (
            <div className={"logoComponent"}>
                <img src={logo} alt="Logo" className={"image"} />
                <h2>Alexander's Blog</h2>
            </div>
        );
    }
}

export { LogoComponent };
