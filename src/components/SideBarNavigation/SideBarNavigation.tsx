import Link from "gatsby-link";
import * as React from "react";

import "./SideBarNavigationStyle.scss";

class SideBarNavComponent extends React.PureComponent<{}, {}> {
    render() {
        return (
            <ul className="sideBarMenuList">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tags">Tags</Link></li>
                <li><Link to="/about-me">About me</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>
        );
    }
}

export { SideBarNavComponent };
