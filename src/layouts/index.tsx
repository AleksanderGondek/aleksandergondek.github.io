import * as React from "react";
import Helmet from "react-helmet";
import Sidebar from "react-sidebar";

import { FooterComponent } from "../components/Footer/footer";
import { HeaderComponent } from "../components/Header";
import { MiniSideBarComponent } from "../components/MiniSideBar/sideBar";
import { SideBarContentComponent } from "../components/SideBarContent/sideBarContent";

import "./defaultLayout.scss";

const mql = window.matchMedia("(min-width: 800px)");

interface IDefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
    location: { pathname: string };
    children: any;
    mql: MediaQueryList;
    sidebarOpen: boolean;
    sidebarDocked: boolean;
}

class DefaultLayout extends React.PureComponent<IDefaultLayoutProps, IDefaultLayoutProps> {
    componentWillMount() {
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
        const sidebarContent = (<SideBarContentComponent/>);
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

export default DefaultLayout;
