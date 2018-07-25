import * as React from "react";

import * as faHeart from "@fortawesome/fontawesome-free-solid/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./FooterStyle.scss";

class FooterComponent extends React.PureComponent<{}, {}> {
    render() {
        return (
            <div className="footer">
                {/* TODO: Include copyright automatically */}
                <p>
                    &copy; 2018 Aleksander Gondek;&nbsp;
                    Made with <FontAwesomeIcon icon={faHeart} size="xs" /> in Gdansk, Poland;&nbsp;
                    Proudly powered by <a href="https://www.gatsbyjs.org">Gatsby.js</a>
                </p>
            </div>
        );
    }
}

export { FooterComponent };
