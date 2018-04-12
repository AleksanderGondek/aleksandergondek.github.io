import * as React from "react";
import Helmet from "react-helmet";
import Sidebar from "react-sidebar";

import { HeaderComponent } from "../components/Header";
import { LogoComponent } from "../components/Logo/logo";

const mql = window.matchMedia("(min-width: 800px)");

interface IDefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
    location: { pathname: string };
    children: any;
    mql: MediaQueryList;
    sidebarOpen: boolean;
    sidebarDocked: boolean;
}

class DefaultLayout extends React.PureComponent<IDefaultLayoutProps, IDefaultLayoutProps> {
    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
        this.setState({ mql, sidebarDocked: mql.matches });
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    mediaQueryChanged = () => {
        this.setState({ sidebarDocked: this.state.mql.matches });
    }

    onSetSidebarOpen = () => {
        this.setState({ sidebarOpen: true });
    }

    render() {
        const sidebarContent = <b>Sidebar content</b>;

        return (
            <Sidebar
                sidebar={sidebarContent}
                open={this.state.sidebarOpen}
                docked={this.state.sidebarDocked}
                onSetOpen={this.onSetSidebarOpen}
            >
                <Helmet
                    title="Gatsby Default Starter"
                    meta={[
                        { name: "description", content: "Sample" },
                        { name: "keywords", content: "sample, something" },
                    ]}
                />
                <div>
                    {this.props.children()}
                </div>
            </Sidebar>
        );
    }
}

export default DefaultLayout;
