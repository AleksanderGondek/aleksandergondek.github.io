import * as React from "react";
import { ClearFix, Col, Container, Row } from "react-grid-system";
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
            <Container fluid>
                <Helmet
                    title="Gatsby Default Starter"
                    meta={[
                        { name: "description", content: "Sample" },
                        { name: "keywords", content: "sample, something" },
                    ]}
                />
                <Row debug>
                    &nbsp;
                </Row>
                <Row debug>
                    <Col xs={2} debug>
                        {/* It is my understanding that I may not correctly use align
                          as 'Align.Center' due to bug in TS (https://github.com/Microsoft/TypeScript/issues/16671) */}
                        <Row debug>
                            <LogoComponent />
                        </Row>
                        <Row debug>
                            <p>Here will be menu</p>
                        </Row>
                    </Col>
                    <Col xs={10} debug>
                        <Row debug>
                            <HeaderComponent />
                        </Row>
                        <Row debug>
                            <div>
                                {this.props.children()}
                            </div>
                        </Row>
                        <Row debug>
                            <p>Here will be footer</p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DefaultLayout;
