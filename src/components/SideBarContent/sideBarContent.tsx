import * as React from "react";

import * as faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import * as faLinkedinIn from "@fortawesome/fontawesome-free-brands/faLinkedinIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { LogoComponent } from "../../components/Logo/logo";
import { SideBarNavComponent } from "../../components/SideBarNavigation/sideBarNav";

import "./sideBarContentStyle.scss";

class SideBarContentComponent extends React.PureComponent<{}, {}> {
    render() {
        return (
            <div className="sideBarContent">
                <LogoComponent/>
                <SideBarNavComponent/>
                <div className="externalPages">
                    <FontAwesomeIcon icon={faGithub}/>
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                </div>
            </div>
        );
    }
}

export { SideBarContentComponent };
