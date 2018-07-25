import Link from "gatsby-link";
import * as React from "react";

import "./SideBarNavigationStyle.scss";

class SideBarNavComponent extends React.PureComponent<{}, {}> {
    render() {
        return (
            <ul className="sideBarMenuList">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tags">Tags</Link></li>
                <li>About me</li>
                <li>Resources</li>
            </ul>
        );
    }
}

export { SideBarNavComponent };
