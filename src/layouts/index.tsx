import * as React from "react";
import Helmet from "react-helmet";
import Sidebar from "react-sidebar";

import { FooterComponent } from "../components/Footer/footer";
import { MiniSideBarComponent } from "../components/MiniSideBar/sideBar";
import { SideBarContentComponent } from "../components/SideBarContent/sideBarContent";
import { ISiteMetadata, ISiteMetadataProps } from "../graphQl/siteMetadata";

import "./defaultLayout.scss";

const mql = (typeof window !== undefined &&
             typeof window !== "undefined" &&
             window) ? window.matchMedia("(min-width: 800px)") : null;

interface IDefaultLayoutProps extends ISiteMetadataProps {
    location: { pathname: string };
    children: any;
    data: ISiteMetadata;
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
                <Helmet
                    title="Gatsby Default Starter"
                    meta={[
                        { name: "description", content: "Sample" },
                        { name: "keywords", content: "sample, something" },
                    ]}
                />
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
        ...siteMetadataQuery
    }
`;

export default DefaultLayout;
