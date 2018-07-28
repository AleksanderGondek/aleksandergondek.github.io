import * as React from "react";
import Sidebar from "react-sidebar";

import { FooterComponent } from "../components/Footer/Footer";
import { MiniSideBarComponent } from "../components/MiniSideBar/SideBar";
import { SideBarContentComponent } from "../components/SideBarContent/SideBarContent";
import { ISiteMetadata, ISiteMetadataProps } from "../contracts/SiteMetadata";

import "./IndexStyle.scss";
import "./prismJsGithubHighlight.css";

const mql = (typeof window !== undefined &&
             typeof window !== "undefined" &&
             window) ? window.matchMedia("(min-width: 800px)") : null;

interface IDefaultLayoutProps extends ISiteMetadataProps {
    location: { pathname: string };
    children: any;
    data: {
        site: {
            siteMetadata: ISiteMetadata,
        },
    };
    mql: MediaQueryList;
    sidebarOpen: boolean;
    sidebarDocked: boolean;
}

class DefaultLayout extends React.PureComponent<IDefaultLayoutProps, IDefaultLayoutProps> {
    componentWillMount() {
        if (mql === null) {
            return;
        }

        mql.addListener(this.mediaQueryChanged);
        this.setState({ mql, sidebarDocked: mql.matches });
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    mediaQueryChanged = () => {
        this.setState({ sidebarDocked: this.state.mql.matches });
        this.setState({ sidebarOpen: this.state.mql.matches });
    }

    toggleSidebarState = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    }

    render() {
        const sidebarContent = (<SideBarContentComponent data={this.props.data} />);
        if (this.state === null) {
            return null;
        }

        return (
            <Sidebar
                sidebar={sidebarContent}
                open={this.state.sidebarOpen}
                docked={this.state.sidebarDocked}
                onSetOpen={this.toggleSidebarState}
            >
                <MiniSideBarComponent
                    isSideMenuOpened={this.state.sidebarDocked}
                    toggleSideBar={this.toggleSidebarState}
                />
                <div className="content">
                    {this.props.children()}
                    <FooterComponent/>
                </div>
            </Sidebar>
        );
    }
}

export const rootQuery = graphql`
    query rootQuery {
        ...SiteMetadataQuery
    }
`;

export default DefaultLayout;
