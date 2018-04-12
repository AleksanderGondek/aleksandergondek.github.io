import * as React from "react";
import Helmet from "react-helmet";

import { HeaderComponent } from "../components/Header";
import { LogoComponent } from "../components/Logo/logo";

interface IDefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
    location: { pathname: string };
    children: any;
}

class DefaultLayout extends React.PureComponent<IDefaultLayoutProps, void> {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default DefaultLayout;
