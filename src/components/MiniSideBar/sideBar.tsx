import * as faBars from "@fortawesome/fontawesome-free-solid/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

import "./SideBarStyle.scss";

interface IMiniSideBarProperties extends React.HTMLProps<HTMLDivElement> {
    isSideMenuOpened: boolean;
    toggleSideBar: () => void;
}

class MiniSideBarComponent extends React.PureComponent<IMiniSideBarProperties, {}> {
    render() {
        if (this.props.isSideMenuOpened) {
            return null;
        }

        return (
            <div className="miniSideBar">
                <button onClick={this.props.toggleSideBar}><FontAwesomeIcon icon={faBars}/></button>
            </div>
        );
    }
}

export { MiniSideBarComponent };
