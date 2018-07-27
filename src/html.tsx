import * as React from "react";

// tslint:disable-next-line:no-var-requires
const favicon = require("./favicon.png");

let stylesStr: string;
if (process.env.NODE_ENV === "production") {
    try {
        // tslint:disable-next-line:no-var-requires
        stylesStr = require("!raw-loader!../public/styles.css");
    } catch (e) {
        // tslint:disable-next-line:no-console
        console.log(e);
    }
}

interface IHtmlProps {
    body: any;
    bodyAttributes: any;
    headComponents: any;
    htmlAttributes: any;
    preBodyComponents: any;
    postBodyComponents: any;
}

module.exports = class HTML extends React.Component<IHtmlProps, {}> {
    render() {
        let css: any;
        if (process.env.NODE_ENV === "production") {
            css = (
                <style
                    id="gatsby-inlined-css"
                    dangerouslySetInnerHTML={{ __html: stylesStr }}
                />
            );
        }
        return (
            <html {...this.props.htmlAttributes} style={{overflowY: "hidden"}}>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <link rel="shortcut icon" type="image/png" href={favicon} />
                    {this.props.headComponents}
                    {css}
                </head>
                <body {...this.props.bodyAttributes}>
                    {this.props.preBodyComponents}
                    <div
                        key={"body"}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                </body>
            </html>
        );
    }
};
