import * as faHeart from "@fortawesome/fontawesome-free-solid/faHeart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

import "./FooterStyle.scss";

class FooterComponent extends React.PureComponent<{}, {}> {
    render() {
        const currentYear = new Date().getFullYear();
        const copyrightYear = 2018;
        let copyRightYearText = `${copyrightYear}`;
        if (currentYear !== copyrightYear) {
            copyRightYearText = `${copyrightYear} - ${currentYear}`;
        }

        return (
            <div className="footer">
                {/* TODO: Include copyright automatically */}
                <p>
                    &copy; {copyRightYearText} Aleksander Gondek;&nbsp;
                    Proudly powered by <a href="https://www.gatsbyjs.org">Gatsby.js</a>
                </p>
            </div>
        );
    }
}

export { FooterComponent };