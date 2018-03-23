import Link from "gatsby-link";
import * as React from "react";

class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>
                        <Link to="/">Gatsby</Link>
                    </h1>
                </div>
            </div>
        );
    }
}

export { HeaderComponent };
