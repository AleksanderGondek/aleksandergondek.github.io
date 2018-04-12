import * as React from "react";

import { LogoComponent } from "../../components/Logo/logo";
import { SideBarNavComponent } from "../../components/SideBarNavigation/sideBarNav";

import "./sideBarContentStyle.scss";

class SideBarContentComponent extends React.PureComponent<{}, {}> {
    render() {
        return (
            <div className="sideBarContent">
                <LogoComponent/>
                <SideBarNavComponent/>
            </div>
        );
    }
}

export { SideBarContentComponent };
