import Link from "gatsby-link";
import * as _ from "lodash";
import * as React from "react";

import { IPagination } from "../../contracts/Pagination";

import "./PagingStyle.scss";

interface IPagingProps {
    pages: IPagination;
    urlPrefix?: string;
}

const PagingComponent: React.StatelessComponent<IPagingProps> = ({ pages, urlPrefix }) => {
    const finalUrlPrefix = _.isNil(urlPrefix) ? "/" : `/${urlPrefix}/`;
    const pagesList = [];

    for (let index = 1; index <= pages.pathContext.pageCount; index++) {
        const linkUrl = index !== 1 ? `${finalUrlPrefix}${index}` : `${finalUrlPrefix}`;
        const isCurrentPage = index === pages.pathContext.index;
        pagesList.push(
            <li className={isCurrentPage ? "current" : ""} key={index}>
                <Link to={linkUrl}>
                    {index}
                </Link>
            </li>,
        );
    }

    const hasOnlyOnePage = pages.pathContext.pageCount <= 1;
    return hasOnlyOnePage ? null : (
        <ol className="blogPostsPaging">{pages}</ol>
    );
};

export { PagingComponent };
