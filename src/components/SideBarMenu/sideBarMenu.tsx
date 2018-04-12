import Link from "gatsby-link";
import * as React from "react";

import "./sideBarMenu.scss";

class SideBarMenuComponent extends React.PureComponent<{}, {}> {
    render() {
        return (
            <ul className="sideBarMenuList">
                <li>Home</li>
                <li>About me</li>
                <li>Archive</li>
                <li>Resources</li>
            </ul>
        );
    }
}

export { SideBarMenuComponent };
