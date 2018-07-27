import * as faGithub from "@fortawesome/fontawesome-free-brands/faGithub";
import * as faLinkedinIn from "@fortawesome/fontawesome-free-brands/faLinkedinIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

import { ISiteMetadataProps } from "../../contracts/SiteMetadata";
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
                    <a href={this.props.data.site.siteMetadata.author.githubProfile}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href={this.props.data.site.siteMetadata.author.linkedInProfie}>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </div>
            </div>
        );
    }
}

export { SideBarContentComponent };
