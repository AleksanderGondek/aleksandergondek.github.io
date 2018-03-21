import * as React from "react";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./index.scss";

const TemplateWrapper = ({ children }: { children: any }) => (
    <div>
        <Helmet
            title="Gatsby Default Starter"
            meta={[
                { name: "description", content: "Sample" },
                { name: "keywords", content: "sample, something" },
            ]}
        />
        <Header />
        <div>
            {children()}
        </div>
    </div>
);

export default TemplateWrapper;
