import * as React from "react";

import * as faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import * as faLinkedinIn from "@fortawesome/fontawesome-free-brands/faLinkedinIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ISiteMetadataProps } from "../../graphQl/SiteMetadata";
import { LogoComponent } from "../Logo/Logo";
import { SideBarNavComponent } from "../SideBarNavigation/SideBarNavigation";

import "./SideBarContentStyle.scss";

class SideBarContentComponent extends React.PureComponent<ISiteMetadataProps, {}> {
    render() {
        return (
            <div className="sideBarContent">
                <LogoComponent data={this.props.data}/>
                <SideBarNavComponent />
                <div className="externalPages">
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
            </div>
        );
    }
}

export { SideBarContentComponent };
